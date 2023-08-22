import { Placement, Options } from "@popperjs/core";


export declare type Trigger = "hover" | "click";

export declare interface TooltipProps {
  content: string;
  trigger?: Trigger;
  placement?: Placement;
  // 是否通过手动的方式进行popper的展示和隐藏
  manual?: boolean;
  // popper的配置选项
  popperOptions?: Partial<Options>;
  // 定义动画
  transition?: string;
  // 展示和隐藏延迟
  openDelay?: number;
  closeDelay?: number;
}

export declare interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
}

// 通过调用popper实例上的show/hide方法来进行手动的popper的展示和隐藏 
export declare interface TooltipInstance {
  show: () => void;
  hide: () => void;
}