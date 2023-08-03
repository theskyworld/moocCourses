import { Ref, InjectionKey } from "vue";

// 父组件Collapse上的属性类型
export interface CollapseProps {
  // 用于绑定v-model
  modelValue: NameType[];
  // 是否为手风琴
  accordion?: boolean;
}

// 父组件事件
export interface CollapseEmits {
  (e: "update:modelValue", values: NameType[]): void;
  (e: "change", values: NameType[]): void;
}

// 子组件CollapseItem上的属性类型
export type NameType = string | number;
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

// 父组件Collapse通过provide/inject将以下上下文中的内容传递给子组件CollapseItem
export interface CollapseContext {
  activeItemsNames: Ref<NameType[]>;
  handleItemClick: (itemName: NameType) => void;
}
export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
