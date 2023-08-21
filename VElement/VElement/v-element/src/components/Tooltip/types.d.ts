import { Placement } from "@popperjs/core";

export declare interface TooltipProps {
    content: string;
    trigger?: "hover" | "click";
    placement?: Placement;
}

export declare interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
    
}