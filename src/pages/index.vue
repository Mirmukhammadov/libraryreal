<template>
  <div class="">
    <Cheader class="" />

    <div class="bg-sky-100">
      <div class="container w-full h-full flex justify-between gap-3">
        <Sidebar class="w-[23%] p-0" />
        <Books class="overflow-auto w-[76%]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Cheader from "../components/header.vue";
import Sidebar from "../components/sidebar.vue";
import Books from "../components/books.vue";
</script>
