<template>
  <div class="px-5 py-4">
    <div class="flex justify-between container items-center">
      <button @click="$emit('handleHamburger')" class="sm:hidden">
        <i class="fa-solid fa-bars"></i>
      </button>
      <button class="text-black text-3xl uppercase">Logo</button>
      <div class="flex justify-between items-center gap-6">
        <div
          class="py-1 px-1 border hover:border-blue-700 outline-none rounded-sm bg-white outline flex justify-between items-center"
          :class="{
            'sm:flex': searchinput,
            hidden: searchinput,
            inputstyle: !searchinput,
          }"
        >
          <input
            type="text"
            v-model="searchedbook"
            @keydown.enter="$emit('handleSearch', searchedbook)"
            :placeholder="t('header.search')"
            class="outline-none"
          />
          <img
            class="cursor-pointer w-5 h-5 sm:flex hidden"
            src="../assets/image/search.png"
          />

          <div class="sm:hidden flex">
            <i @click="searchinput = true" class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <button @click="handleSearchInput" v-if="searchinput">
          <img
            src="../assets/image/search.png"
            alt=""
            class="w-10 h-10 sm:hidden"
          />
        </button>
        <div class="sm:flex justify-between gap-3 uppercase hidden">
          <button
            @click="changeLanguage('en')"
            class="uppercase py-2 px-4 bg-gray-300 rounded hover:bg-gray-600 transition"
          >
            {{ t("header.en") }}
          </button>
          <button
            @click="changeLanguage('ru')"
            class="uppercase py-2 px-4 bg-gray-300 rounded hover:bg-gray-600 transition"
          >
            {{ t("header.ru") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const hamburger = ref(false);
const searchinput = ref(true);

function changeLanguage(lang) {
  locale.value = lang;
  router.push({ name: route.name, params: { ...route.params, lang } });
}

function handleSearchInput() {
  searchinput.value = false;
}

let searchedbook = ref("");
</script>

<style scoped>
.inputstyle {
  position: fixed;
  top: 0%;
  left: 0%;

  width: 100%;
  height: 70px;
}
</style>
