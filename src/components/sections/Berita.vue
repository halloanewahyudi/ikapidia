<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useCounterStore } from '@/stores/counter';
import posts from '@/assets/berita.json';

const store = useCounterStore();

const items = ref([]);
const currentPage = ref(1);
const itemsPerPage = 20;
const maxVisiblePages = 5;
const dataLoaded = ref(false);

onMounted(() => {
    items.value = posts.berita;
    dataLoaded.value = true;
});

function excerptTitle(kalimat) {
    if (kalimat) {
        const kataKata = kalimat.split(' ');
        const limaKata = kataKata.slice(0, 4);
        const hasil = limaKata.join(' ');
        return hasil;
    } else {
        return "Kalimat kosong";
    }
}

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

const paginatedData = computed(() => {
    if (!dataLoaded.value) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredItems = items.value.filter(item => item.judul.toLowerCase().includes(store.searchQuery.toLowerCase()));
    return filteredItems.slice(start, end);
});

const totalPages = computed(() => {
    if (!dataLoaded.value) return 0;
    const filteredItems = items.value.filter(item => item.judul.toLowerCase().includes(store.searchQuery.toLowerCase()));
    return Math.ceil(filteredItems.length / itemsPerPage);
});

const visiblePages = computed(() => {
    if (!dataLoaded.value) return [];
    const start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages.value, start + maxVisiblePages - 1);
    const pagesArray = [];
    for (let i = start; i <= end; i++) {
        pagesArray.push(i);
    }
    return pagesArray;
});

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};

watch(store.searchQuery, () => {
    currentPage.value = 1;
});
</script>

<template>
    <div class="py-10">
        <ul class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-5 px-6">
            <li v-for="(item, index) in paginatedData" :key="index">
                <router-link to="#" class="flex flex-col gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
                    <div>
                        <img :src="item.image" alt="" srcset="">
                    <h5 class="mb-2 font-medium tracking-tight text-blue-700 dark:text-white leading-none">{{ excerptTitle(item.judul) }}</h5>
                    <p class="text-sm flex-grow font-normal text-gray-700 dark:text-gray-400 ">No Anggota: {{ item.post }}</p>
                   </div>
                    
            
                </router-link>
            </li>
        </ul>
        <div class="max-w-screem-md mx-auto text-center pt-10 pb-20">
            <ul class="pagination inline-flex max-w-max mx-auto">
                <li @click="goToPage(1)" :class="{ disabled: currentPage === 1 || !dataLoaded }">First</li>
                <li @click="prevPage" :class="{ disabled: currentPage === 1 || !dataLoaded }">Previous</li>
                <li class="number" @click="goToPage(page)" v-for="page in visiblePages" :key="page" :class="{ active: currentPage === page || !dataLoaded }">{{ page }}</li>
                <li @click="nextPage" :class="{ disabled: currentPage === totalPages || !dataLoaded }">Next</li>
                <li @click="goToPage(totalPages)" :class="{ disabled: currentPage === totalPages || !dataLoaded }">Last</li>
            </ul>
        </div>
    </div>
</template>

<style>
.pagination li {
    @apply cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li.number {
    @apply hidden lg:flex;
}

.pagination li:first-child {
    @apply flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li:last-child {
    @apply flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li.disabled {
    pointer-events: none;
    opacity: 0.5;
}

.pagination li.active {
    @apply font-bold text-blue-700;
}
</style>
