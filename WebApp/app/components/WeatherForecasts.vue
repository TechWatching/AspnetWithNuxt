<script setup lang="ts">
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
const { data: weatherForecasts } = await useFetch<WeatherForecast[]>('/api/weatherforecast');
</script>
<template>
  <div>
    <div v-if="weatherForecasts">
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Summary</th>
          <th>T (°C)</th>
          <th>T (°F)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in weatherForecasts" :key="item.date">
          <td>{{ item.date }}</td>
          <td>{{ item.summary }}</td>
          <td>{{ item.temperatureC }}</td>
          <td>{{ item.temperatureF }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>