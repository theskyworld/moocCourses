import { Placement } from "@popperjs/core";


export declare type Trigger = "hover" | "click";

export declare interface TooltipProps {
  content: string;
  trigger?: Trigger;
  placement?: Placement;
}

export declare interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
    
}