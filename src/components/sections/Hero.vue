<script setup>
import { useCounterStore } from "@/stores/counter";
import SearchVue from "../icons/Search.vue";
const store =  useCounterStore()
/* const getPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
    .then((res)=>{
        items.value = res.data
    })
    .catch(console.error())
  }
  onMounted(getPost) */

</script>
<template>
    <section class="bg-white dark:bg-gray-900 min-h-[60vh] flex flex-col items-center justify-center">
        <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-700 md:text-5xl lg:text-6xl dark:text-white">
                Buku Jendela Dunia, disini Jendelanya Buku</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 px-6 dark:text-gray-400">
                Kumpulan penerbit Indonesia, 
                anda dapat menemukan berbagai macam buku dan penerbit disini. </p>
                <div class="relative">
                    <input type="text" v-model="store.searchQuery" placeholder="Cari Penerbit" class="p-3 rounded-lg border-blue-500  border-2  focus:ring-4 focus:ring-blue-300 w-full placeholder:Cari mb-6">
                    <SearchVue class="absolute right-2 text-blue-600 top-6 -translate-y-1/2 text-3xl"/>
                </div>
            
        </div>
    </section>

</template>