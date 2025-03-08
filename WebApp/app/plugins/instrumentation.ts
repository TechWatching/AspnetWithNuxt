import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  WebTracerProvider
} from "@opentelemetry/sdk-trace-web";
import {Resource} from "@opentelemetry/resources";
import {ATTR_SERVICE_NAME} from "@opentelemetry/semantic-conventions";
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-proto";
import {ZoneContextManager} from "@opentelemetry/context-zone";
import {getWebAutoInstrumentations} from "@opentelemetry/auto-instrumentations-web";
import {registerInstrumentations} from "@opentelemetry/instrumentation";

export default defineNuxtPlugin({
  name: 'opentelemetry-plugin',
  async setup() {
    const config = useRuntimeConfig();
    const { otelExporterOtlpEndpoint: otlpUrl, otelExporterOtlpHeaders: headers, otelResourceAttributes: resourceAttributes, otelServiceName: serviceName } = config.public;
    if (otlpUrl && headers && resourceAttributes && serviceName) {
      initializeTelemetry(otlpUrl, parseDelimitedValues(headers), parseDelimitedValues(resourceAttributes), serviceName);
    }
  }
})

function initializeTelemetry(otlpUrl: string, headers: Record<string, string>, ressourceAttributes: Record<string, string>, serviceName: string) {
  ressourceAttributes[ATTR_SERVICE_NAME] = serviceName;
  const provider = new WebTracerProvider({
    resource: new Resource(ressourceAttributes),
    spanProcessors: [
      new BatchSpanProcessor(new ConsoleSpanExporter()),
      new BatchSpanProcessor(new OTLPTraceExporter({url: `${otlpUrl}/v1/traces`, headers}))
    ]
  });

  provider.register({
    // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
    contextManager: new ZoneContextManager()
  });

  registerInstrumentations({
    instrumentations: getWebAutoInstrumentations({
      "@opentelemetry/instrumentation-fetch": {
        propagateTraceHeaderCorsUrls: [new RegExp(`\\/api\\/*`)],
      }
    }),
  });
}

function parseDelimitedValues(s: string): Record<string, string> {
  const headers = s.split(",");
  const result: Record<string, string> = {};

  headers.forEach((header) => {
    const [key, value] = header.split("=");
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}