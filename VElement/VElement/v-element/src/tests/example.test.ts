import { test, expect } from "vitest";

// test用于创建一个测试实例
// expect为断言的一种写法
test("common matcher", () => {
  const name = "Alice";
  expect(name).toBe("Alice");

  expect(1 + 2).toBe(3);
  expect(1 + 2).not.toBe(1);
});

test("to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("test number", () => {
  expect(1).toBeGreaterThan(0);
  expect(0).toBeLessThan(3);
  expect(1).toBeGreaterThan(-3);
});

test("test object", () => {
  const obj1 = {
    name: "Alice",
  };
  const obj2 = {
    name: "Alice",
  };

  expect(obj1).toEqual(obj2);
});
