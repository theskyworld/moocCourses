<script setup lang="ts">
import { onMounted, ref } from "vue";
import VButton from "./components/Button//Button.vue";
import { VButtonInstance } from "./components//Button/types";

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
    <!-- Button -->
    <v-button ref="vbuttonInstance">default</v-button>
    <v-button plain>plain button</v-button>
    <v-button round>round button</v-button>
    <v-button circle>circle button</v-button>
    <v-button disabled>disabled button</v-button><br /><br />
    <v-button type="primary">Primary</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="info">Info</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="danger">Danger</v-button><br /><br />
    <v-button type="primary" plain>Primary</v-button>
    <v-button type="success" plain>Success</v-button>
    <v-button type="info" plain>Info</v-button>
    <v-button type="warning" plain>Warning</v-button>
    <v-button type="danger" plain>Danger</v-button><br /><br />
    <v-button size="large">Large</v-button>
    <v-button size="small">Small</v-button><br /><br />
  </div>
</template>

<style scoped></style>
