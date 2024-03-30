<script setup>
import FacebookVue from "@/components/icons/Facebook.vue";
import InstagramVue from "@/components/icons/Instagram.vue";
import XVue from "@/components/icons/X.vue";
import SidebarKanan from '../components/SidebarKanan.vue'
import Globe from "@/components/icons/Globe.vue";
</script>

<template>
  <div class="container mx-auto min-h-screen pt-10 pb-20 px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
      <div class="lg:col-span-3">

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sticky top-10">
   <img src="../assets/BP.png" alt="" srcset="" class="w-36 mx-auto">
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Balai Pustaka</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos laudantium deleniti ex porro amet sequi minima perspiciatis nesciunt quo!</p>
        <span class="flex gap-2 items-center"><Globe /> <a href="https://balaipustaka.co.id/" target="_blank" class="text-blue-700 hover:text-blue-600 hover:underline duration-300"> balaipustaka.co.id</a> </span>
         <hr class="my-4">
        <p class="mb-4"> Buku Balai Pustaka tersedia di:</p>
        <div class="flex gap-4 items-center  mb-6">
          <a href="#">
            <img src="../assets/lazada.png" class="h-6" alt="">
          </a>
          <a href="#">
            <img src="../assets/tokped.png" class="h-6" alt="">
          </a>
          <a href="#">
            <img src="../assets/shopy-logo.png" class="h-6" alt="">
          </a>
        </div>
        <hr class="my-4">
        <p class="mb-4"> Ikuti kami di:</p>
        <div class="flex gap-4 items-center text-lg  mb-6">
          <a href="#">
           <InstagramVue />
          </a>
          <a href="#">
            <FacebookVue />
          </a>
          <a href="#">
           <XVue />
          </a>
        </div>
    </div>
</div>

      </div>
      <div class="lg:col-span-6">
        <h1 class="text-3xl lg:text-5xl font-bold mb-6 text-blue-700"> Loremipsum</h1>
        <div class="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima, repellat pariatur magni maxime
            quidem minus veritatis itaque qui animi aperiam, sit consequuntur architecto distinctio, dignissimos harum
            optio veniam sint.
          </p>
          <h4 class="font-bold text-xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, repudiandae.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam suscipit aspernatur molestias quasi
            harum accusantium officiis minus hic debitis atque, illo deserunt vel neque doloremque, autem corporis ab!
            Vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus qui pariatur dolore quae deserunt
            molestiae eligendi, architecto aut quisquam rerum quasi ipsam, neque iure. Neque deleniti dignissimos
            laudantium est molestiae quos labore veritatis? Ratione consectetur quo optio, dolor similique fuga, veniam
            soluta laudantium ut exercitationem et vitae tempora! Possimus, pariatur!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illum eaque officia nesciunt culpa eum fugit
            amet nemo tempora suscipit repudiandae non voluptatem, odio natus, fugiat quidem ab atque eveniet tempore
            adipisci modi quos earum recusandae quia! Praesentium ipsum, libero voluptatem provident deserunt doloribus
            vel quam rem delectus illum architecto natus dolorum iste modi. Aliquam, sit quibusdam? Quos amet unde,
            possimus fugit rem cumque ipsam alias fuga eligendi omnis, magnam molestiae a dolorum quis tenetur expedita
            laborum. Assumenda, distinctio eveniet accusamus ullam deserunt ducimus. Fuga odit adipisci inventore
            consequuntur, molestias harum perferendis odio nostrum labore error et velit. Veniam, doloremque?
          </p>
          <h4 class="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt!
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis doloremque rerum ratione delectus nam quisquam ullam exercitationem harum adipisci cumque, porro alias aut cupiditate deleniti eos fugit id beatae natus doloribus? Saepe quod possimus incidunt aut nisi, voluptate voluptates et.
          </p>
        </div>
      </div>
      <div class="lg:col-span-3">
        <hr class="my-6 lg:hidden">
      <SidebarKanan />
      </div>
    </div>
  </div>
</template>

<style scoped>
.kiri {
  @apply md:col-span-2 lg:col-span-4;
}

.tengah {
  @apply w-full bg-neutral-100 md:col-span-4 lg:col-span-8;
}

.kanan {}
</style>
