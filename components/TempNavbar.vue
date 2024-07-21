<template>
  <div>
    <input type="text" ref="datepickerInput" class="input" placeholder="Select a date" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Check if Flowbite is defined (optional, for testing purposes)
  if (typeof Flowbite !== 'undefined') {
    // Initialize Flowbite datepicker
    new Flowbite.Datepicker($refs.datepickerInput);
    console.log('Flowbite datepicker initialized successfully.');
  } else {
    console.error('Flowbite not detected. Check your CDN configuration.');
  }
});
</script>

<style scoped>
/* Scoped styles using Flowbite classes */
.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}
</style>
