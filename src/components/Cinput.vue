<template>
  <input
    :value="props.modelValue"
    @input="handleInput"
    :placeholder="placeholder"
    :type="type"
    class="outline-none border hover:border-blue-100 rounded py-3 px-[10px] color-black"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["modelValue", "typeof", "placeholder"]);
const emit = defineEmits(["update:modelValue"]);

function handleInput(event) {
  console.log("Input event triggered:", event.target.value);
  emit("update:modelValue", event.target.value);
}
</script>
