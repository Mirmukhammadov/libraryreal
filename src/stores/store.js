// // src/store/bookStore.js
// import { ref, watchEffect } from "vue";

// const books = ref(JSON.parse(localStorage.getItem("bookValues")) || []);

// watchEffect(() => {
//   localStorage.setItem("bookValues", JSON.stringify(books.value));
// });

// function addBook(book) {
//   books.value.push(book);
// }

// export { books, addBook };
