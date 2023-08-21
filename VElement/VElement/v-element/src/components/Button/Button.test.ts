// 测试Button组件
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("test Button.vue", () => {
  // 测试在Button.vue组件挂载之后的容器元素
  test("wrapper element after Button.vue mounted", () => {
    // 使用@vue/test-utils工具中的mount方法挂载Button组件，并传递props和slots给Button组件
    const wrapperElem = mount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: "button",
      },
    });
    // 测试挂载后的wrapperElem元素
    // console.log(wrapperElem.html());
    // 测试是否存在指定的类名
    // 判断的目标元素为<template>下的最顶层元素且唯一的根元素，前面不包含注释等其它内容
    expect(wrapperElem.classes()).toContain("v-button--primary");

    // 测试是否存在指定的slot内容
    expect(wrapperElem.get("button").text()).toBe("button");

    // 测试事件
    wrapperElem.get("button").trigger("click");
    expect(wrapperElem.emitted()).toHaveProperty("click");
  });

  // 测试disabled属性
  test("disabled attribute", () => {
    const wrapperElem = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: "disabled",
      },
    });
    // 测试是否成功添加了disabled属性
    expect(wrapperElem.attributes("disabled")).toBeDefined();
    expect(wrapperElem.find("button").element.disabled).toBeDefined();
    // 点击事件应当失效
    wrapperElem.get("button").trigger("click");
    expect(wrapperElem.emitted()).not.toHaveProperty("click");
  });
});
