<script setup>
import pen from '../assets/penerbit.json'
import { ref, onMounted } from "vue";

const items = ref([]);

onMounted(() => {
    items.value = pen.Penerbit; // Mengisi items dengan data dari file JSON yang telah diimpor
});
</script>

<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item">
                {{ item.nama }} <br>
            </li>
        </ul>
    </div>
</template>
