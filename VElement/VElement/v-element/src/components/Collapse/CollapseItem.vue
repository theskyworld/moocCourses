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
      <!-- 添加图标 -->
      <v-icon icon="angle-right" class="header-angle"></v-icon>
    </div>
    <!-- 通过v-show来控制content的是否展示（item的打开或关闭） -->
    <Transition name="slide" v-on="transitionEvents">
      <div class="v-collapse-item__wrapper" v-show="isActive">
        <!-- 使用上述的一层div包裹以下的内容，将v-show添加到上层div上，避免出现v-show已经执行（content已经展示）但是动画在之后才出现的动画卡顿问题 -->
        <div class="v-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import { CollapseItemProps, collapseContextKey } from "./types";
import VIcon from "../Icon/Icon.vue";
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

// 计算slide动画前后元素的高度
const transitionEvents: Record<string, (elem: HTMLElement) => void> = {
  beforeEnter(elem) {
    elem.style.height = "0px";
    // 添加overflow属性，避免出现动画过程前后元素位置移位的情况
    elem.style.overflow = "hidden";
  },
  enter(elem) {
    elem.style.height = `${elem.scrollHeight}px`;
  },
  afterEnter(elem) {
    elem.style.height = "";
    elem.style.overflow = "";
  },
  beforeLeave(elem) {
    elem.style.height = `${elem.scrollHeight}px`;
    elem.style.overflow = "hidden";
  },
  leave(elem) {
    elem.style.height = "0px";
  },
  afterLeave(elem) {
    elem.style.height = "";
    elem.style.overflow = "";
  },
};
</script>
<style scoped></style>
