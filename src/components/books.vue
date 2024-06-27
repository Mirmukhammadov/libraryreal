<!-- src/components/Books.vue -->
<template>
  <div class="">
    <div class="flex-2 overflow-y-auto p-2 bg-white mt-4">
      <!-- Books content goes here -->
      <h2 class="text-xl font-bold mb-4">Yangi Kitoblar</h2>
      <div class="flex flex-wrap gap-1">
        <div
          v-for="(book, index) in books"
          :key="index"
          :to="'/' + index"
          class="my-2 p-4 bg-white shadow rounded border hover:border-blue-300 cursor-pointer"
        >
          <router-link :to="'/' + index">
            <div>
              <img src="https://picsum.photos/250/350" alt="" />
              <p class="uppercase">{{ book.name }}</p>
              <p>{{ book.author }}</p>
              <p>{{ book.year }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";

const books = computed(() => {
  const storedBooks = JSON.parse(localStorage.getItem("bookValues")) || [];
  return storedBooks;
});

// Watch for changes in localStorage and update books
watchEffect(() => {
  const storedBooks = JSON.parse(localStorage.getItem("bookValues")) || [];
  books.value = storedBooks;
});
</script>
