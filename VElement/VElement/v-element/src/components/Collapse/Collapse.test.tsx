import { beforeAll, describe, expect, test, vi } from "vitest";
import { mount, VueWrapper, DOMWrapper } from "@vue/test-utils";
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

// 该文件内的顶级作用域变量
const onChange = vi.fn();
let wrapperElem: VueWrapper,
  headers: DOMWrapper<Element>[],
  contents: DOMWrapper<Element>[],
  firstHeader: DOMWrapper<Element>,
  firstContent: DOMWrapper<Element>,
  secondHeader: DOMWrapper<Element>,
  secondContent: DOMWrapper<Element>,
  disabledHeader: DOMWrapper<Element>,
  disabledContent: DOMWrapper<Element>;

// 对测试代码使用test进行分组管理

describe("Collapse.vue", () => {
  // 在所有的test实例执行前都会进行调用的钩子函数
  // 用于初始化或修改所有test实例中的公共属性等
  beforeAll(() => {
    wrapperElem = mount(
      () => (
        <Collapse modelValue={["a"]} onChange={onChange}>
          <CollapseItem name="a" title="Titile A">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="Titile B">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="Titile C" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["Icon"],
        },
        attachTo: document.body,
      }
    );
    headers = wrapperElem.findAll(".v-collapse-item__header");
    contents = wrapperElem.findAll(".v-collapse-item__wrapper");
    firstHeader = headers[0];
    secondHeader = headers[1];
    disabledHeader = headers[2];
    firstContent = contents[0];
    secondContent = contents[1];
    disabledContent = contents[2];
  });

  test("basic Collapse", () => {
    // console.log(wrapperElem.html());
    // 测试headers和contents的数量
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);
    // 测试Title属性
    expect(firstHeader.text()).toBe("Titile A");
    // 测试内容
    expect(firstContent.isVisible()).toBeTruthy();
    expect(secondContent.isVisible()).toBeFalsy();
    expect(firstContent.text()).toBe("content a");
  });

  test("toggle content on open/close", async () => {
    // 测试点击后卡片打开或关闭的功能
    // 使用trigger("click")模拟对DOM元素的点击
    await firstHeader.trigger("click");
    // console.log(wrapperElem.html());
    // firstContent的DOM元素上添加display:none属性
    // 测试之前添加attachTo: document.body,
    expect(firstContent.isVisible()).toBeFalsy();
    await secondHeader.trigger("click");
    expect(secondContent.isVisible()).toBeTruthy();
  });

  test("emit", () => {
    expect(onChange).toHaveBeenCalledTimes(2);
    // expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenLastCalledWith(["b"]);
  });

  test("disabled", async () => {
    // 测试disabled
    //清空之前所有onChange的状态，包括被调用的次数等
    onChange.mockClear();
    expect(disabledHeader.classes()).toContain("is-disabled");
    await disabledHeader.trigger("click");
    expect(disabledContent.isVisible()).toBeFalsy();
    expect(onChange).not.toHaveBeenCalled();
  });
});

// describe("Collapse.vue", () => {
//   test("basic Collapse", async () => {
//     // const wrapperElem = mount(Collapse, {
//     //   props: {
//     //     modelValue: ["a"],
//     //   },
//     //   slots: {
//     //     // 因为要渲染的插槽内容为一个组件，而不是一个简单的字符串
//     //     // 故使用h进行渲染，或者使用tsx的语法来进行书写
//     //     default: h(Item, { name: "a", title: "Titile A" }, "content a"),
//     //   },
//     //   global: {
//     //     // 添加图标
//     //     stubs: ["Icon"],
//     //   },
//     // });

//     // vite支持直接创建.tsx文件并书写tsx语法

//     const onChange = vi.fn();
// const wrapperElem: VueWrapper = mount(
//   () => (
//     <Collapse modelValue={["a"]} onChange={onChange}>
//       <CollapseItem name="a" title="Titile A">
//         content a
//       </CollapseItem>
//       <CollapseItem name="b" title="Titile B">
//         content b
//       </CollapseItem>
//       <CollapseItem name="c" title="Titile C" disabled>
//         content c
//       </CollapseItem>
//     </Collapse>
//   ),
//   {
//     global: {
//       stubs: ["Icon"],
//     },
//     attachTo: document.body,
//   }
// );
//     // console.log(wrapperElem.html());

//     // 测试headers和contents的数量
//     const headers = wrapperElem.findAll(".v-collapse-item__header");
//     const contents = wrapperElem.findAll(".v-collapse-item__wrapper");
//     expect(headers.length).toBe(3);
//     expect(contents.length).toBe(3);

//     // 测试Title属性
//     const firstHeader = headers[0];
//     const secondHeader = headers[1];
//     expect(firstHeader.text()).toBe("Titile A");

//     // 测试内容
//     const firstContent = contents[0];
//     const secondContent = contents[1];
//     const disabledContent = contents[2];
//     expect(firstContent.isVisible()).toBeTruthy();
//     expect(secondContent.isVisible()).toBeFalsy();
//     expect(firstContent.text()).toBe("content a");

//     // 测试点击后卡片打开或关闭的功能
//     // 使用trigger("click")模拟对DOM元素的点击
//     await firstHeader.trigger("click");
//     // console.log(wrapperElem.html());
//     // firstContent的DOM元素上添加display:none属性
//     // 测试之前添加attachTo: document.body,
//     expect(firstContent.isVisible()).toBeFalsy();
//     expect(onChange).toHaveBeenCalledWith([]);
//     await secondHeader.trigger("click");
//     expect(secondContent.isVisible()).toBeTruthy();
//     expect(onChange).toHaveBeenCalledWith(["b"]);

//     // 测试disabled
//     const disabledHeader = headers[2];
//     expect(disabledHeader.classes()).toContain("is-disabled");
//     await disabledHeader.trigger("click");
//     expect(disabledContent.isVisible()).toBeFalsy();

//   });
// });
