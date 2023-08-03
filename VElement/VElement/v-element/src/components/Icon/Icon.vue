<template>
  <!-- 其本质为对fontawesome图标的FontAwesomeIcon组件进行封装 -->
  <!-- 将使用fontawesome时FontAwesomeIcon组件上需要的属性值改为通过Icon组件来传入,通过属性的透传实现值的传递 -->
  <!-- 并同时增加一些自定义的功能 -->
  <!-- :class="{[`v-icon--${type}`] : type}"  增加自定义的type属性功能 -->
  <!-- :style="customStyles"  增加图标自定义的样式,例如color等 -->
  <i
    class="v-icon"
    :class="{ [`v-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <!-- 使用v-bind="$props"将defineProps中定义的属性透传到font-awesome-icon组件上 -->
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IconProps } from "./types";
import { omit } from "lodash-es";
import { computed } from "vue";
// 修改组件导出的组件名
defineOptions({
  name: "VIcon",
  inheritAttrs: false,
});

// 定义外部使用时需要传入的属性
// 直接使用安装的库中内置定义的属性类型
const props = defineProps<IconProps>();

// 由于新增了自定义的属性,故对传入的属性值进行过滤,只将FontAwesomeIcon内置的属性值传递给该组件
// 通过lodash实现过滤
// npm install lodash-es --save
// npm install @types/lodash-es --save-dev

// 对属性进行过滤
// 将type和color属性进行过滤,不属于FontAwesomeIcon内置的属性
// 使用computed,使其具备响应式
const filteredProps = computed(() => omit(props, ["type", "color"]));

// 自定义样式
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>
<style scoped></style>
