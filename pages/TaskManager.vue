<template>
  <div>
    <ManageTask @openModal="openModal"/>
    <ModelDialog :open="isModalOpen" @closeModal="closeModal"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ManageTask from '~/pages/ManageTask.vue';
import ModalDialog from '~/components/ModelDialog.vue';


const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
