<script setup lang="ts">
import { onMounted, ref } from "vue";
import VButton from "./components/Button/Button.vue";
import { VButtonInstance } from "./components/Button/types";

// 在组件外部对Button组件对应的button元素进行获取
const vbuttonInstance = ref<VButtonInstance>();
onMounted(() => {
  if (vbuttonInstance.value) {
    const vbuttonElem = vbuttonInstance.value.ref;
    console.log(vbuttonElem); // button  会自动解包，不需要.value
  }
});
</script>

<template>
  <div>
    <v-button type="primary" plain ref="vbuttonInstance">button</v-button>
  </div>
</template>

<style scoped></style>
