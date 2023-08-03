<template>
  <!-- 父组件，用于通过slot展示子组件CollapseItem中的内容 -->
  <div class="v-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from "vue";
import { NameType, collapseContextKey } from "./types.ts";
// 重命名组件的对外导出名
defineOptions({
  name: "VCollapse",
});

// 存储当前已打开的item的name值
const activeItemsNames = ref<NameType[]>([]);

// 处理点击item的title进行当前item的打开或关闭的事件
const handleItemClick = (itemName: NameType) => {
  // 先判断当前item是打开还是关闭的（name值是否存在activeItemsNames中）
  const curItemNameIndex = activeItemsNames.value.indexOf(itemName);
  if (curItemNameIndex > -1) {
    // 已打开，点击则关闭
    activeItemsNames.value.splice(curItemNameIndex, 1);
  } else {
    // 未打开，点击则打开
    activeItemsNames.value.push(itemName);
  }
};
// 将以上定义的两个属性通过provide/inject传递给子组件
provide(collapseContextKey, {
  activeItemsNames,
  handleItemClick,
});
</script>
<style scoped></style>
