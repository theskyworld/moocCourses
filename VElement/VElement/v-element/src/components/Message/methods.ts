// 创建一个通过render来动态挂载Message组件的函数

import { h, render, shallowReactive } from "vue";
import { MessageContext, MessagePropsWithoutDestory } from "./types";
import Message from "./Message.vue";

let seed = 1;
// 用于存放每个Message实例，每个实例包含id,props,vnode,位置信息等属性
const instances: MessageContext[] = shallowReactive([]);

// export async function mountMessage(props: MessagePropsWithoutDestory) {
//   const id = `message_${seed++}`;
//   // 将Message组件挂载到该容器元素，然后将该容器元素添加到documentDOM结构中
//   const container = document.createElement("div");
//   // destory的回调函数
//   // 函数的执行在Message组件内进行，根据isVisible值为false时进行移除
//   // 用于在Message隐藏之后销毁Message组件
//   // 其DOM结构在真实DOM结构中也被移除

//   function onDestory() {
//     // 销毁Message组件后，对应地将instances中存储的实例进行删除
//     const index = instances.findIndex((instance) => instance.id === id);
//     // 如果没找到，直接返回
//     if (index === -1) return;
//       document.body.removeChild(container);
//       if (index + 1 < instances.length) {
//           instances.slice(index + 1).forEach((instance) => {
//               const beforeTop = parseInt(instance.container.style.top);
//               instance.container.style.top = beforeTop - 35 + "px";
//           })

//       }
//     instances.splice(index, 1);
//     render(null, container);

//   }

//   const newProps = {
//     ...props,
//     destory: onDestory,
//   };

//   // 创建Message组件的虚拟节点
//   const vnode = h(Message, newProps);
//   // 将虚拟节点渲染到容器元素
//   await render(vnode, container);
//   document.body.appendChild(container);

//   const prevInstance = getLastInstance();

//   const instance = {
//     id,
//     vnode,
//     props: newProps,
//     positionRelative: {
//       gap: 10,
//       // 因为将Message组件挂载到container容器之后，该容器内只包含Message组件渲染后的DOM元素
//       // 可以认为该容器的高度为Message组件渲染后的DOM元素的高度
//       height: container.offsetHeight,
//       currentTopOffset:
//         instances.length === 0
//           ? 10 + vnode.el.offsetHeight
//           : prevInstance.positionRelative.currentTopOffset +
//             prevInstance.positionRelative.height +
//             10,
//       },
//     container,
//   };
//   instances.push(instance);
//   container.style.position = "absolute";
//   container.style.left = "700px";
//   container.style.top = instance.positionRelative.currentTopOffset + "px";
//   return instance;
// }

// 获取上一个instance
// 当前的instance相对于上一个instance进行位置的计算

export async function mountMessage(props: MessagePropsWithoutDestory) {
  const id = `message_${seed++}`;
  // 将Message组件挂载到该容器元素，然后将该容器元素添加到documentDOM结构中
  const container = document.createElement("div");

  // destory的回调函数
  // 函数的执行在Message组件内进行，根据isVisible值为false时进行移除
  // 用于在Message隐藏之后销毁Message组件
  // 其DOM结构在真实DOM结构中也被移除

    function onDestory() {
      const idx = instances.findIndex((instance) => instance.id === id);
      if (idx === -1) return;
      instances.splice(idx, 1);
    render(null, container);
  }

  const newProps = {
    ...props,
    id,
    destory: onDestory,
  };

  // 创建Message组件的虚拟节点
  const vnode = h(Message, newProps);
  // 将虚拟节点渲染到容器元素
  render(vnode, container);

  document.body.prepend(container.firstElementChild);
  const vm = vnode.component;
  const instance = {
    id,
    vnode,
    props: newProps,
    vm,
  };
  instances.push(instance);
  return instance;
}

export function getLastInstance() {
  return instances.at(-1);
}

export function getLastBottomOffset(id: string) {
  const index = instances.findIndex((instance) => instance.id === id);
  if (index <= 0) {
    return 0;
  } else {
    const prev = instances[index - 1];
    return prev.vm.exposed.bottomOffset.value;
  }
}
