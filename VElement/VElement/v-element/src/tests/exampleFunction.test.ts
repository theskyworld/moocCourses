// 测试函数

import { describe, test, vi, expect, Mocked } from "vitest";
import { testFn, requestData } from "./utils";
import axios from "axios";
vi.mock("axios");
// 解决模拟后的axios的类型报错问题
const mockedAxios = axios as Mocked<typeof axios>;

// describe用于为多个test进行分组
describe("function", () => {
  // 测试模拟的回调函数
  test("create a mock function", () => {
    // 使用vi.fn来模拟一个实际的callback函数
    const callback = vi.fn();
    testFn(11, callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(11);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  // 监控对象上的方法是否被调用
  test("spy on method", () => {
    const obj = {
      getAge() {
        return 1;
      },
    };

    // 监控obj对象上的getName方法
    const spy = vi.spyOn(obj, "getAge");
    obj.getAge();
    expect(spy).toHaveBeenCalled();
    obj.getAge();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  // 模拟第三方库文件用于测试，例如axios
  test("mock third party module", async () => {
    // mockedAxios.get.mockImplementation(() =>
    //   // 模拟请求到的数据并返回
    //   // 可以用于测试后端返回的数据是否为前端预想得到的数据
    //   Promise.resolve({ data: { name: "Alice", age: 12 } })
    // );
    // 等价于
    mockedAxios.get.mockResolvedValue({ data: { name: "Alice", age: 12 } });
    const data = await requestData();
    expect(data).toEqual({ name: "Alice", age: 12 });
  });
});
