<template>
  <div class="relative">
    <div :class="{ 'opacity-50': addBookBoolean }" class="z-0">
      <Cheader class="" />

      <div class="bg-sky-100">
        <div class="container w-full h-full flex justify-between gap-3">
          <Sidebar class="w-[23%] p-0" @addBook="handleAddBook" />
          <Books class="overflow-auto w-[76%]" />
        </div>
      </div>
    </div>

    <div>
      <Cform
        @cancelAddBook="handleAddBook"
        v-if="addBookBoolean"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  </div>
</template>

<script setup>
import Cheader from "../components/header.vue";
import Sidebar from "../components/sidebar.vue";
import Books from "../components/books.vue";
import Cform from "../components/Cform.vue";
import { ref } from "vue";

let addBookBoolean = ref(false);
function handleAddBook() {
  addBookBoolean.value = !addBookBoolean.value;
}
</script>
