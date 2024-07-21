<template>
  <div class="rounded-lg shadow-sm ">
    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
      <div class="px-3 pt-8 pb-10 text-center relative z-10">
        <h4 class="text-md uppercase  leading-tight">{{ card.title }}</h4>
        <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">{{ card.value }}</h3>
        <p v-if="card.change" :class="{ 'text-green-500': card.change.includes('▲'), 'text-red-500': card.change.includes('▼') }" class="text-xs leading-tight">{{ card.change }}</p>
      </div>
      <div class="absolute bottom-0 inset-x-0">
        <canvas :id="chartId" height="70"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  props: {
    card: {
      type: Object,
      required: true,
    },
    chartId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      const ctx = document.getElementById(props.chartId).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: props.card.chartData.length }, (_, i) => i + 1),
          datasets: [
            {
              backgroundColor: props.card.chartBackgroundColor,
              borderColor: props.card.chartBorderColor,
              borderWidth: 2,
              data: props.card.chartData,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 10,
              },
            },
          },
        },
      });
    });

    return {};
  },
});
</script>
