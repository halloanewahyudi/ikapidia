<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ListItem from "./element/ListItem.vue";

const items = ref([])
const fetchPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
        .then((res) => {
            items.value = res.data;
            dataLoaded.value = true; // Setelah data dimuat, atur flag ke true
        })
        .catch(error => {
            console.error(error);
        });
} 
onMounted(()=>{
    fetchPosts()
})

function excerpt(kalimat) {
    if (kalimat) {
        const kataKata = kalimat.split(' ');
        const limaKata = kataKata.slice(0, 10);
        const hasil = limaKata.join(' ');
        return hasil;
    } else {
        return "Kalimat kosong";
    }
}
</script>
<template>
    <div class="font-bold text-blue-700 text-xl"> Best Seler </div>
    <div v-for="item in items.slice(0,5)" :key="item">
         <ListItem :title="item.title" :description="excerpt(item.body)" />
    </div>
</template>