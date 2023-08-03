<template>
  <i class="v-icon">
    <!-- 使用v-bind="$props"将defineProps中定义的属性透传到font-awesome-icon组件上 -->
    <font-awesome-icon v-bind="$props"></font-awesome-icon>
  </i>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IconProps } from "./types";
// 修改组件导出的组件名
defineOptions({
  name: "VIcon",
  inheritAttrs: false,
});

// 定义外部使用时需要传入的属性
// 直接使用安装的库中内置定义的属性类型
defineProps<IconProps>();
</script>
<style scoped></style>
