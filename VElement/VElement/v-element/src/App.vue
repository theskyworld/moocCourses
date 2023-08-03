<script setup lang="ts">
import { onMounted, ref } from "vue";
import VButton from "./components/Button//Button.vue";
import { VButtonInstance } from "./components//Button/types";
import VCollapse from "./components/Collapse/Collapse.vue";
import VCollapseItem from "./components/Collapse/CollapseItem.vue";
// 在组件外部对Button组件对应的button元素进行获取
const vbuttonInstance = ref<VButtonInstance>();
onMounted(() => {
  if (vbuttonInstance.value) {
    const vbuttonElem = vbuttonInstance.value.ref;
    console.log(vbuttonElem); // button  会自动解包，不需要.value
  }
});

const activeItemsNames = ref(["item1"]);
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

    <!-- Collapse -->
    <v-collapse v-model="activeItemsNames" accordion>
      <v-collapseItem name="item1">
        <template #title>
          <h1>title1</h1>
        </template>
        <h2>content1 title</h2>
        <div>content1</div>
      </v-collapseItem>
      <v-collapseItem name="item2" title="title2">
        <div>content2</div>
      </v-collapseItem>
      <v-collapseItem name="item3" title="title3">
        <div>content3</div>
      </v-collapseItem>
      <v-collapseItem name="item4" title="title4" disabled>
        <div>content4</div>
      </v-collapseItem>
      <p>{{ activeItemsNames }}</p>
    </v-collapse>
  </div>
</template>

<style scoped></style>
