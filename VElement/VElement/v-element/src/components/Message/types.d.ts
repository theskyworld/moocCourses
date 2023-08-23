import { ComponentInternalInstance, VNode } from "vue";

// 消息属性类型
export declare interface MessageProps {
  message?: string | VNode;
  duration?: number;
  isShowClose?: boolean;
  type?: "success" | "info" | "warning" | "error";
  destory: () => void;
  // 每个Message组件之间垂直方向上的间距
  offset?: number;
  id: string;
}

// 使用时排除destory属性，不需要外部传入
export type MessagePropsWithoutDestory = Omit<MessageProps, "destory" | "id">;


// 每个Message的上下文信息
// 用于在创建多个Message时，各个Message之间例如位置信息的交互
interface PositionRelative {
  // 每个Message之间的垂直位置上的间隔（当前Message相对于其上一个Message的垂直方向上的间隔，第一个Message相对于其总容器的上边框下边沿）
  gap: number;
  // 每个Message包含边框、内边距、内容的高度
  height: number;
  currentTopOffset: number;
}
export interface MessageContext {
  id: string;
  vnode: VNode;
  props: MessageProps;
  vm : ComponentInternalInstance;
  // positionRelative: PositionRelative;
  // container : HTMLElement
}

  