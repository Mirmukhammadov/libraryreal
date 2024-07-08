<template>
  <div class="relative">
    <div :class="{ 'opacity-50': addBookBoolean }" class="z-0">
      <Cheader
        class=""
        @handleSearch="handleSearch"
        @handleHamburger="handleHamburger"
      />
      <sidebarModal
        v-if="hamburger"
        class="absolute top-0 left-0"
        @addBook="handleAddBook"
      />

      <div class="bg-sky-100">
        <div class="container w-full h-full flex justify-between gap-3">
          <Sidebar
            class="w-[23%] p-0 hidden sm:flex"
            @addBook="handleAddBook"
          />
          <Books
            class="overflow-auto"
            :booksToRender="booksToRender"
            @handleDeleteBook="handleDeleteBook"
          />
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
import sidebarModal from "../components/sidebarModal.vue";
import { ref, computed, watchEffect } from "vue";

let addBookBoolean = ref(false);
let filteredBooks = ref([]);
let bookArray = ref([]);
let searchValue = ref("");
let hamburger = ref(false);

function handleAddBook() {
  addBookBoolean.value = !addBookBoolean.value;
}

function handleSearch(value) {
  searchValue.value = value;
}

function handleHamburger() {
  hamburger.value = !hamburger.value;
}

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    addBookBoolean.value = false;
  }
  if (event.key === "Escape" || event.key === "click") {
    hamburger.value = false;
  }
});

watchEffect(() => {
  const storedBooks = JSON.parse(localStorage.getItem("bookValues")) || [];
  bookArray.value = storedBooks;

  filteredBooks.value = storedBooks.filter(
    (book) =>
      book.name.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      book.year.toString().includes(searchValue.value)
  );
});

const booksToRender = computed(() => {
  return searchValue.value ? filteredBooks.value : bookArray.value;
});

function handleDeleteBook(id) {
  console.log(id, "indexbookid");
}
</script>
