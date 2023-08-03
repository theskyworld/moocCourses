<template>
  <!-- 父组件，用于通过slot展示子组件CollapseItem中的内容 -->
  <div class="v-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { ref, provide } from "vue";
import {
  NameType,
  collapseContextKey,
  CollapseProps,
  CollapseEmits,
} from "./types.ts";
// 重命名组件的对外导出名
defineOptions({
  name: "VCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

// 存储当前已打开的item的name值
// eslint-disable-next-line vue/no-setup-props-destructure
const activeItemsNames = ref<NameType[]>(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    activeItemsNames.value = props.modelValue;
  }
);

// 手风琴模式处理
if (props.accordion && activeItemsNames.value.length > 1) {
  console.warn("accordion mode should only have one active item");
}

// 处理点击item的title进行当前item的打开或关闭的事件
const handleItemClick = (itemName: NameType) => {
  if (props.accordion) {
    activeItemsNames.value = [
      activeItemsNames.value[0] === itemName ? "" : itemName,
    ];
  } else {
    // 先判断当前item是打开还是关闭的（name值是否存在activeItemsNames中）
    const curItemNameIndex = activeItemsNames.value.indexOf(itemName);
    if (curItemNameIndex > -1) {
      // 已打开，点击则关闭
      activeItemsNames.value.splice(curItemNameIndex, 1);
    } else {
      // 未打开，点击则打开
      activeItemsNames.value.push(itemName);
    }
  }

  emits("update:modelValue", activeItemsNames.value);
  emits("change", activeItemsNames.value);
};
// 将以上定义的两个属性通过provide/inject传递给子组件
provide(collapseContextKey, {
  activeItemsNames,
  handleItemClick,
});
</script>
<style scoped></style>
