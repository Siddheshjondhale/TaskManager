<template>
    <div>


<div class="bg-white   my-5 px-10 py-7 rounded-lg CardCSS">
    <div class="flex justify-between">
    <h2 class="text-xl font-medium mb-1 text-gray-800">{{ task.title }}</h2>
    <h2 class="text-base font-medium mb-1 text-gray-800">{{ task.status }}</h2>
</div>
    <p class="text-gray-700 text-xs">{{ task.start_date }}</p>
    <hr class="my-3 border-gray-400" />
    <p class="text-gray-700 text-base">{{ task.description }}</p>

    <p class="text-gray-700 mt-3 text-xs">{{ task.end_date }}</p>


  </div>


    </div>
</template>

<script setup lang="ts" >
import { defineProps } from 'vue';

const props = defineProps({
  task: Object // Define props for task data
});
</script>

<style scoped>
.CardCSS{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    border-left: 2px solid transparent;
    border-color: #08aa71;
}
.CardCSS:hover{
    border-color: #36c492;
}
</style>