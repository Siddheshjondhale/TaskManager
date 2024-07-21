<template >
  <div>
  <Navbar />
  <div class="mx-8 bgcolorSet">
 
   <h1 class="text-center mt-10 text-3xl font-bold">Manage your tasks</h1>
<div class="CardWidth mx-auto">


    <div class="flex justify-end"> 

        <button class="text-white bg-green-500 px-3 py-2 rounded-md mt-5" onclick="toggleModal()">Add new task</button>
    </div>

    <h1 class="text-2xl font-medium">Active Tasks</h1>


    <div v-for="(task,index) in tasks":key="index">
    <TaskCard :task="task" />
    </div>


</div>
  

  </div>
 
  </div>
</template>




<script  setup lang="ts">





const tasks = [
  {
    id: 1,
    title: 'Design Website UI',
    description: 'Create wireframes and mockups for the new website design.',
    start_date: '2024-07-01',
    end_date: '2024-07-15',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Implement Backend API',
    description: 'Develop RESTful APIs for user authentication and data retrieval.',
    start_date: '2024-07-05',
    end_date: '2024-07-25',
    status: 'Pending'
  },
  {
    id: 3,
    title: 'Write Documentation',
    description: 'Prepare detailed documentation for the project.',
    start_date: '2024-07-10',
    end_date: '2024-07-20',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Write Documentation',
    description: 'Prepare detailed documentation for the project.',
    start_date: '2024-07-10',
    end_date: '2024-07-20',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Write Documentation',
    description: 'Prepare detailed documentation for the project.',
    start_date: '2024-07-10',
    end_date: '2024-07-20',
    status: 'Completed'
  },
  // Add more tasks as needed
];



</script>

<style scoped>
.bgcolorSet{
    background-color: #f6fafd;
}
.CardWidth{
    width: 60%;

}
</style>