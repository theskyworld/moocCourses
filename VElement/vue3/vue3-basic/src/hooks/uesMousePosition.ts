import { onMounted, onUnmounted, Ref, ref } from "vue";

interface MousePostion {
  x: Ref<number>;
  y: Ref<number>;
}

function uesMousePosition(): MousePostion {
  const x = ref(0);
  const y = ref(0);
  const updateMousePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  // 挂载事件监听器
  onMounted(() => {
    document.addEventListener("mousemove", updateMousePosition);
  });

  // 卸载事件监听器
  onUnmounted(() => {
    document.removeEventListener("mousemove", updateMousePosition);
  });

  return {
    x,
    y,
  };
}

export default uesMousePosition;
