// 封装一个通用的当点击指定的目标元素外部时，执行指定事件回调函数(例如隐藏popper)的工具函数

import { onMounted, Ref, onUnmounted } from "vue";

function useOnClickOutside(
  targetElem: Ref<undefined | HTMLElement>,
  callbacck: (e: MouseEvent) => void
) {
  const handler = (e: MouseEvent) => {
    // 如果点击的为目标元素及其子元素（contains返回true），就直接返回
    if (!targetElem || targetElem.value.contains(e.target as HTMLElement)) {
      return;
    }
    callbacck(e);
  };

  // 在挂载和卸载组件时分别为document元素添加和移除点击事件监听
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
}

export default useOnClickOutside;
