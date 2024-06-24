<!-- src/components/Books.vue -->
<template>
  <div class="">
    <div class="flex-2 overflow-y-auto p-2 bg-white mt-4">
      <!-- Books content goes here -->
      <h2 class="text-xl font-bold mb-4">Yangi Kitoblar</h2>
      <div class="flex flex-wrap gap-1">
        <div
          v-for="book in books"
          :key="book.id"
          :to="'/' + book.id"
          class="my-2 p-4 bg-white shadow rounded border hover:border-blue-300 cursor-pointer"
        >
          <router-link :to="'/' + book.id">
            <img src="https://picsum.photos/250/350" alt="" />
            {{ book.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const books = ref(
  Array.from({ length: 4 }, (_, i) => ({ id: i, title: `Book ${i + 1}` }))
);
</script>
