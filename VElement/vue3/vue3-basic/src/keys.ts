import { InjectionKey, Ref } from "vue";

// 使用InjectionKey<Ref<string>>约束注入的依赖的值为Ref<string>类型
export const langKey = Symbol("lang") as InjectionKey<Ref<string>>;

export const userKey = Symbol('user') as InjectionKey<{ user: string, id : number }>;
