<template>
  <div class="flex flex-col gap-1">
    <div class="py-4">
      <button
        class="bg-white text-black-800 border-1 p-2 w-full text-left px-4 flex justify-between items-center"
        :class="{ 'text-blue-700': !handleBookBoolean }"
        @click="handleBook"
      >
        Kitoblar
        <i v-if="handleBookBoolean" class="fa-solid fa-arrow-down"></i>
        <i v-else class="fa-solid fa-arrow-up"></i>
      </button>

      <ul v-if="!handleBookBoolean" class="mt-4">
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600 cursor-pointer"
        >
          Category 1
        </li>
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600 cursor-pointer"
        >
          Category 1
        </li>
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600 cursor-pointer"
        >
          Category 1
        </li>
      </ul>
    </div>

    <div class="">
      <button
        class="bg-white text-black-700 border-1 p-2 w-full text-left px-4 flex justify-between items-center"
        :class="{ 'text-blue-700': !handleAudioBookBoolean }"
        @click="handleAudioBook"
      >
        Audiokitoblar
        <i v-if="handleAudioBookBoolean" class="fa-solid fa-arrow-down"></i>
        <i v-else class="fa-solid fa-arrow-up"></i>
      </button>

      <ul v-if="!handleAudioBookBoolean" class="mt-4">
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600"
        >
          Category 1
        </li>
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600"
        >
          Category 1
        </li>
        <li
          class="bg-white w-full p-1 px-4 text-gray-500 border-[1px] border-black-600"
        >
          Category 1
        </li>
      </ul>
    </div>

    <button
      class="bg-white text-black-700 border-1 p-2 w-full text-left px-4 flex justify-between items-center mt-3"
      @click="$emit('addBook')"
    >
      Add Book
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
let handleBookBoolean = ref(true);
let handleAudioBookBoolean = ref(true);
function handleBook() {
  handleBookBoolean.value = !handleBookBoolean.value;
}

function handleAudioBook() {
  handleAudioBookBoolean.value = !handleAudioBookBoolean.value;
}
</script>
