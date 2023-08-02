<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { provide, ref, Ref } from "vue";
import { langKey } from "./keys";

// props
interface User {
  name: string;
  age: number;
}
const user = {
  name: "Alice",
  age: 12,
};

// emits
const isHiddenAgeText = ref("");
function onChangeIsHiddenAge(isHidenAge: Ref<boolean>) {
  isHiddenAgeText.value = isHidenAge.value
    ? "年龄已经被隐藏"
    : "年龄已经被展示";
}

// provide
const lang = ref("chinese");
provide(langKey, lang);
</script>

<template>
  <h2>{{ isHiddenAgeText }}</h2>
  <HelloWorld :user="user" @changeIsHiddenAge="onChangeIsHiddenAge" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
