// 创建一个通过render来动态挂载Message组件的函数

import { h, render } from "vue";
import { MessagePropsWithoutDestory } from "./types";
import Message from "./Message.vue";

export function mountMessage(props: MessagePropsWithoutDestory) {
  // 将Message组件挂载到该容器元素，然后将该容器元素添加到documentDOM结构中
  const container = document.createElement("div");

  // destory的回调函数
  // 函数的执行在Message组件内进行，根据isVisible值为false时进行移除
  // 用于在Message隐藏之后销毁Message组件
  // 其DOM结构在真实DOM结构中也被移除

  function onDestory() {
    render(null, container);
  }

  const newProps = {
    ...props,
    destory: onDestory,
  };

  // 创建Message组件的虚拟节点
  const vnode = h(Message, newProps);
  // 将虚拟节点渲染到容器元素
  render(vnode, container);

  document.body.appendChild(container);
}
