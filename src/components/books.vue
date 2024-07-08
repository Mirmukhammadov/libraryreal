<!-- src/components/Books.vue -->
<template>
  <div class="">
    <div class="flex-2 overflow-y-auto p-2 bg-white mt-4">
      <!-- Books content goes here -->
      <h2 class="text-xl font-bold mb-4">{{ t("books.title") }}</h2>

      <div class="flex flex-wrap gap-5 justify-center">
        <div
          v-for="(book, index) in booksToRender"
          :key="index"
          :to="'/' + index"
          class="my-2 p-4 bg-white shadow rounded border hover:border-blue-300 cursor-pointer"
        >
          <router-link :to="'/' + index" class="hover:no-underline">
            <div class="flex flex-col hover:no-underline border-none">
              <img src="https://picsum.photos/200/300" alt="" />
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
import { computed, watchEffect, defineProps } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  booksToRender: {
    type: Array,
    default: () => [],
  },
});

console.log(props.booksToRender);
</script>
