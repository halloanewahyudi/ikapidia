<script setup>
defineProps(['title','description'])
</script>
<template>
    <div class="mb-4">
     <a href="#" class="text-blue-700 hover:underline"> <h5 class=" font-medium">{{ title }}</h5> </a> 
      <p class="text-sm">
        {{ description }}
      </p>
    </div>
</template>