import { Ref, InjectionKey } from "vue";

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
