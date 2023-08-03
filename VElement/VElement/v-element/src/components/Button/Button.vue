<template>
  <!-- 在Button组件内首先定义一个普通的button元素 -->
  <!-- 然后为其添加固定的类名和动态的类型，以便为其添加对应的样式 -->
  <!-- 动态的类名在使用该Button组件时确定 -->
  <!-- 例如，使用时，通过使用vue组件的属性传值，<Button type="primary" plain>button</Button>，
    最后渲染出的结果为<button class="v-button v-button--primary is-plain">button</button> 
    最后就是一个普通的button元素，加上以上的v-button v-button--primary is-plain类名对应的样式
  -->
  <!-- 本质就是对原生的button元素进行样式和功能的封装，但是最后要注意将元素原生的内置属性添加到封装后的Button组件上，以便能够使用 -->
  <button
    ref="_ref"
    class="v-button"
    :class="{
      [`v-button--${type}`]: type,
      [`v-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <!-- 添加图标 -->
    <v-icon icon="spinner" v-if="loading" spin></v-icon>
    <v-icon :icon="icon" v-if="icon"></v-icon>
    <span><slot /></span>
  </button>
</template>
<!-- 修改当前组件的对外导出组件名 -->
<!-- 或者配置macros后在setup内定义 -->
<!-- <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VButton",
});
</script> -->
<script setup lang="ts">
import { ref } from "vue";
import { buttonProps, ButtonProps } from "./types";
import VIcon from "../Icon/Icon.vue";
// 修改当前组件的对外导出组件名
defineOptions({
  name: "VButton",
});

// 使用defineProps声明buttonProps属性
// 接收使用Button组件时通过组件的属性传值传入的值
// 方式一  使用导入的buttonProps变量
// defineProps(buttonProps);

// 方式二  使用导入的ButtonProps类型，需要新特性支持，安装macros
// defineProps<ButtonProps>();
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

// 获取当前组件内的button元素，并将其赋值给_ref变量
// 外部再通过_ref变量来对Button组件内的button元素进行获取
const _ref = ref<HTMLButtonElement>();
// 暴露当前组件内的属性
defineExpose({
  // 向外曝出ref属性，以便能够通过ref()的方式来在组件外部对Button组件对应的button元素进行获取
  // 例如
  // const vbuttonInstance = ref<VButtonInstance>();
  // onMounted(() => {
  //   if (vbuttonInstance.value) {
  //     const vbuttonElem = vbuttonInstance.value.ref;
  //     console.log(vbuttonElem); // button  会自动解包，不需要.value
  //   }
  // });
  ref: _ref,
});
</script>
<style scoped></style>
