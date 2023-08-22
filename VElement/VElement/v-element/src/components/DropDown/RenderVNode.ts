// 一个用于将指定的虚拟节点渲染成真实DOM节点的通用组件
import { defineComponent } from "vue";

const RenderVNode = defineComponent({
  props: {
    // 接收一个字符串或者对象类型的虚拟节点
    vNode: {
      type: [String, Object],
      required: true,
    },
  },
  setup(props) {
    return () => props.vNode;
  },
});

export default RenderVNode;
