<template>
  <div class="container">
    <div
      class="bg-white border border-black-900 w-[80%] mx-auto my-0 px-4 py-10 mt-[100px] gap-y-4 flex flex-col"
    >
      <div class="flex justify-between items-center w-full">
        <h3 class="text-black text-2xl">Add book</h3>
        <button class="bg-red-100 py-1 px-2" @click="$emit('cancelAddBook')">
          <i class="fa-solid fa-xmark text-red-600"></i>
        </button>
      </div>

      <form
        @submit.prevent="getBookValues"
        class="flex flex-row justify-between gap-y-6 flex-wrap"
      >
        <Cinput
          required
          placeholder="Name"
          v-model="bookValues.name"
          class="w-[48%]"
        />

        <Cinput
          required
          placeholder="Author"
          v-model="bookValues.author"
          class="w-[48%] pl-3"
        />
        <Cinput
          required
          type="number"
          placeholder="Year"
          v-model="bookValues.year"
          class="w-[48%]"
        />
        <Cinput
          required
          placeholder="Link Covers"
          v-model="bookValues.linkCovers"
          class="w-[48%] pl-3"
        />

        <select
          required
          name=""
          id=""
          v-model="bookValues.category"
          class="outline-none border hover:border-blue-100 rounded w-[48%] py-3 pl-3 color-black"
        >
          <option value="" disabled selected hidden>Category</option>
          <option value="books">Books</option>
          <option value="audioBooks">AudioBooks</option>
        </select>
        <Cinput
          required
          placeholder="Link Book"
          v-model="bookValues.linkBook"
          class="w-[48%] pl-3"
        />
        <textarea
          required
          type="text"
          placeholder="Comment"
          class="w-full outline-none border hover:border-blue-100 rounded py-3 px-[10px] color-black"
          v-model="bookValues.comment"
        />
      </form>
      <div class="flex justify-end gap-3" style="align-items: end">
        <button
          class="text-white bg-red-600 px-3 py-2 rounded"
          @click="$emit('cancelAddBook')"
        >
          Cancel
        </button>
        <button
          class="inline text-white bg-green-600 px-3 py-2 rounded"
          @click="getBookValues"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Cinput from "./Cinput.vue";

let bookValues = ref({
  name: "",
  category: "",
  author: "",
  year: "",
  linkCovers: "",
  linkBook: "",
  comment: "",
});
const emits = defineEmits(["cancelAddBook"]);
function getBookValues() {
  console.log(bookValues.value.name, "value");
  console.log(bookValues.value, "value");

  //   emits("cancelAddBook");
}
</script>
