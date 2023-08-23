import { VNode } from "vue";

// 消息属性类型
export declare interface MessageProps {
  message?: string | VNode;
  duration?: number;
  isShowClose?: boolean;
  type?: "success" | "info" | "warning" | "error";
  destory: () => void;
}

// 使用时排除destory属性，不需要外部传入
export type MessagePropsWithoutDestory = Omit<MessageProps, "destory">;
