import { PropType } from "vue";
export type ButtonTypes = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSizes = "large" | "small";
export type NativeType = "button" | "submit" | "reset";
export interface VButtonInstance {
  ref: HTMLButtonElement;
}

export interface ButtonProps {
  type?: ButtonTypes;
  size?: ButtonSizes;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  // button元素内置原生属性
  nativeType?: NativeType; // nativeType即原生button元素的type属性，与这里的type进行区分
  autofocus?: boolean;
}
export const buttonProps = {
  // type属性
  type: {
    // type属性的类型
    type: String as PropType<ButtonTypes>,
  },
  size: {
    type: String as PropType<ButtonSizes>,
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  nativeType: {
    type: String as PropType<NativeType>,
  },
  autofocus: {
    type: Boolean,
  },
};
