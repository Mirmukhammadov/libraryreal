<template>
  <div class="bg-sky-100">
    <div class="container w-full h-full flex justify-between gap-5">
      <sidebar class="w-[45%] p-0" @addBook="handleAddBook" />

      <div
        class="w-full h-full bg-white my-4 p-4 flex flex-col relative gap-y-10"
      >
        <div>
          <p class="text-xl font-bold border-b-[1px] border-black-600 pb-2">
            Английский язык в сфере строительства = English for Building
            Engineering
          </p>
        </div>

        <div class="flex justify-between items-start">
          <div class="flex flex-col gap-y-3 items-start rounded">
            <img src="https://picsum.photos/250/350" alt="" />
            <button
              class="bg-[blue] text-center w-full p-2 text-white text-normal hover:opacity-[90%] duration-200"
            >
              save
            </button>
            <button
              class="bg-[green] w-full text-center p-2 text-white text-normal hover:opacity-[80%] duration-200"
            >
              download
            </button>
          </div>
          <div class="flex flex-col gap-y-3 w-[65%] h-auto">
            <div
              class="border-[1px] border-black-600 px-5 py-3 flex flex-col gap-y-3 rounded"
            >
              <div class="flex flex-col gap-0">
                <p class="font-semibold text-slate-700">Author</p>
                <span class="font-light text-slate-400">{{
                  renderarray.author
                }}</span>
              </div>
              <div class="flex flex-col gap-0">
                <p class="font-semibold text-slate-700">Name</p>
                <span class="font-light text-slate-400">{{
                  renderarray.name
                }}</span>
              </div>
              <div class="flex flex-col gap-0">
                <p class="font-semibold text-slate-700">Year</p>
                <span class="font-light text-slate-400">{{
                  renderarray.year
                }}</span>
              </div>
            </div>

            <button
              class="bg-white text-black-700 border-[1px] border-black-400 p-2 w-full text-left px-4 flex rounded justify-between items-center"
              :class="{ 'text-blue-700': !handleCommentBoolean }"
              @click="handleCommentBoolean = !handleCommentBoolean"
            >
              Comment
              <i v-if="handleCommentBoolean" class="fa-solid fa-arrow-down"></i>
              <i v-else class="fa-solid fa-arrow-up"></i>
            </button>

            <p
              class="p-2 px-4 border-[1px] border-black-400 rounded"
              v-if="!handleCommentBoolean"
            >
              {{ renderarray.comment }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import sidebar from "../components/sidebar.vue";

const route = useRoute();

const handleCommentBoolean = ref(true);

const books = ref(JSON.parse(localStorage.getItem("bookValues")));
const id = ref(Number(route.params.id));

const renderarray = books.value[id.value];
</script>
