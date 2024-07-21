<!-- components/Dashboard.vue -->
<template>
  <div class="  my-10   flex items-center  justify-center ">
    <div class="w-full max-w-7xl">
      <div class="-mx-20 md:flex">
        <div v-for="(card, index) in cards" :key="index" class="w-full md:w-1/3 px-2">
          <dashboard-card :card="card" :chartId="'chart' + (index + 1)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCard from '~/components/DashboardCard.vue'; // Import the reusable card component

export default {
  components: {
    DashboardCard,
  },
  data() {
    return {
      cards: [
        {
          title: 'Task Completed',
          value: '17',
          change: '▲ 50.1%',
          chartData: [1, 2, 1, 3, 5, 4, 7],
          chartBackgroundColor: 'rgba(101, 116, 205, 0.1)',
          chartBorderColor: 'rgba(101, 116, 205, 0.8)',
        },
        {
          title: 'Task Pending',
          value: '5',
          change: '▼ 42.8%',
          chartData: [2, 3, 2, 9, 7, 7, 4],
          chartBackgroundColor: 'rgba(246, 109, 155, 0.1)',
          chartBorderColor: 'rgba(246, 109, 155, 0.8)',
        },
        {
          title: 'Overall',
          value: '10',
          change: '▲ 8.2%',
          chartData: [2, 5, 1, 3, 2, 6, 7],
          chartBackgroundColor: 'rgba(246, 153, 63, 0.1)',
          chartBorderColor: 'rgba(246, 153, 63, 0.8)',
        },
{
          title: 'Task Completed',
          value: '17',
          change: '▲ 57.1%',
          chartData: [1, 2, 1, 3, 5, 4, 7],
          chartBackgroundColor: 'rgba(101, 116, 205, 0.1)',
          chartBorderColor: 'rgba(101, 116, 205, 0.8)',
        },

      ],
    };
  },
};
</script>
