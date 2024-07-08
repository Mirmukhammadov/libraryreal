<template>
  <div
    class="bg-gray-800 h-screen w-1/5 flex flex-col items-center pt-10 p-4 text-center text-white"
  >
    <!-- <button class="absolute left-0 top-0">
      <i class="fa-solid fa-xmark"></i>
    </button> -->
    <div class="flex flex-col justify-center gap-4 mb-4">
      <button
        @click="changeLanguage('en')"
        class="uppercase py-2 px-6 w-full bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        {{ t("header.en") }}
      </button>
      <button
        @click="changeLanguage('ru')"
        class="uppercase py-2 px-6 bg-gray-700 rounded hover:bg-gray-600 transition"
      >
        {{ t("header.ru") }}
      </button>
    </div>

    <button
      class="bg-blue-600 text-white border-1 py-2 w-full flex justify-center items-center mt-3 rounded hover:bg-blue-500 transition"
      @click="$emit('addBook')"
    >
      {{ t("sidebar.addBook") }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import sidebar from "./sidebar.vue";

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const { t } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
  router.push({ name: route.name, params: { ...route.params, lang } });
}
</script>
