<template>
  <div class="bg-[gray] px-5 py-4">
    <div class="flex justify-between container items-center">
      <button @click="handleHamburger" class="sm:hidden">
        <i class="fa-solid fa-bars"></i>
      </button>
      <button class="text-black text-3xl uppercase">Logo</button>
      <div class="flex justify-between items-center gap-6">
        <div
          class="py-1 px-1 border hover:border-blue-700 outline-none rounded-sm bg-white outline sm:flex hidden"
        >
          <input
            type="text"
            v-model="searchedbook"
            @keydown.enter="$emit('handleSearch', searchedbook)"
            placeholder="Search"
            class="outline-none"
          />
          <img
            class="cursor-pointer w-5 h-5"
            src="../assets/image/search.png"
          />
        </div>

        <img
          src="../assets/image/search.png"
          alt=""
          class="w-10 h-10 sm:hidden"
        />
        <div class="sm:flex justify-between gap-3 uppercase hidden">
          <button class="uppercase">uz</button>
          <button class="uppercase">rus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

let searchedbook = ref("");

function handleHamburger() {
  console.log("hamburger");
}
</script>
