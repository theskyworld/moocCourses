<template>
  <!-- 子组件，用于展示item中的title、content内容，然后通过slot将其插入父组件Collapse中 -->
  <div
    class="v-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="v-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleClick()"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <!-- 通过v-show来控制content的是否展示（item的打开或关闭） -->
    <div
      class="v-collapse-item__content"
      :id="`item-content-${name}`"
      v-show="isActive"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import { CollapseItemProps, collapseContextKey } from "./types";
// 重命名组件的对外导出名
defineOptions({
  name: "VCollapseItem",
});

// 定义外部要传入的属性，组件属性传值
const props = defineProps<CollapseItemProps>();

// 接收父组件中传递的collapseContext
const collapseContext = inject(collapseContextKey);
// 当前item是否已打开
const isActive = computed(() =>
  collapseContext?.activeItemsNames.value.includes(props.name)
);
// 处理点击item的title进行当前item的打开或关闭的事件
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
  console.log(isActive.value);
};
</script>
<style scoped></style>
