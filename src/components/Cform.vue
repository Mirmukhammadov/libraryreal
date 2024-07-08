<template>
  <div class="container">
    <div
      class="bg-white border border-black-900 w-[80%] mx-auto my-0 px-4 py-10 mt-[100px] gap-y-4 flex flex-col"
    >
      <div class="flex justify-between items-center w-full">
        <h3 class="text-black text-2xl">{{ t("form.title") }}</h3>
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
          :placeholder="t('form.name')"
          v-model="bookValues.name"
          class="w-[48%]"
          :class="{ 'border-[red]': v$.name.$error }"
        />

        <Cinput
          required
          :placeholder="t('form.author')"
          v-model="bookValues.author"
          class="w-[48%] pl-3"
          :class="{ 'border-[red]': v$.author.$error }"
        />
        <Cinput
          required
          type="number"
          :placeholder="t('form.year')"
          v-model="bookValues.year"
          class="w-[48%]"
          :class="{ 'border-[red]': v$.year.$error }"
        />
        <Cinput
          required
          :placeholder="t('form.linkCovers')"
          v-model="bookValues.linkCovers"
          class="w-[48%] pl-3"
          :class="{ 'border-[red]': v$.linkCovers.$error }"
        />

        <select
          required
          name=""
          id=""
          v-model="bookValues.category"
          :class="{ 'border-[red]': v$.category.$error }"
          class="outline-none border hover:border-blue-100 rounded w-[48%] py-3 pl-3 color-black"
        >
          <option value="" disabled selected hidden>
            {{ t("form.category") }}
          </option>
          <option value="books">Books</option>
          <option value="audioBooks">AudioBooks</option>
        </select>
        <Cinput
          required
          :placeholder="t('form.linkBook')"
          v-model="bookValues.linkBook"
          :class="{ 'border-[red]': v$.linkBook.$error }"
          class="w-[48%] pl-3"
        />
        <textarea
          required
          type="text"
          :placeholder="t('form.comment')"
          class="w-full outline-none border hover:border-blue-100 rounded py-3 px-[10px] color-black"
          v-model="bookValues.comment"
          :class="{ 'border-[red]': v$.comment.$error }"
        />
      </form>

      <span class="text-[red] px-2 font-bold" v-if="hasError">{{
        t("form.error")
      }}</span>
      <div class="flex justify-end gap-3" style="align-items: end">
        <button
          class="text-white bg-red-600 px-3 py-2 rounded"
          @click="$emit('cancelAddBook')"
        >
          {{ t("form.cancelButton") }}
        </button>
        <button
          class="inline text-white bg-green-600 px-3 py-2 rounded"
          @click="getBookValues"
        >
          {{ t("form.addButton") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Cinput from "./Cinput.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
const bookValuesArray = ref([]);
const { t } = useI18n();

let bookValues = ref({
  name: "",
  category: "",
  author: "",
  year: "",
  linkCovers: "",
  linkBook: "",
  comment: "",
});

const rules = {
  name: { required },
  category: { required },
  author: { required },
  year: { required },
  linkCovers: { required },
  linkBook: { required },
  comment: { required },
};

const v$ = useVuelidate(rules, bookValues);
const hasError = ref(false);

const emits = defineEmits(["cancelAddBook"]);
function getBookValues() {
  v$.value.$touch();
  if (v$.value.$invalid) {
    hasError.value = true;
    return;
  }

  hasError.value = false;
  bookValuesArray.value = localStorage.getItem("bookValues");
  !bookValuesArray.value
    ? (bookValuesArray.value = [])
    : (bookValuesArray.value = JSON.parse(bookValuesArray.value));

  bookValuesArray.value.push(bookValues.value);

  localStorage.setItem("bookValues", JSON.stringify(bookValuesArray.value));

  location.reload();

  emits("cancelAddBook");
}
</script>
