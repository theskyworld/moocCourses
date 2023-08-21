### 测试目录

#### 测试相关

测试时需要选取的测试工具

- 通用的测试框架

  - Mocha
  - Jest
  - Vitest

- 针对对应库（React、Vue 等）的测试库

通用测试框架的几大功能

- 断言(查看断言的[不同语法的书写](https://www.chaijs.com))
- Mock
- 代码覆盖率
- Snapshot

#### 基本使用

使用 vitest 进行单元测试

安装 vitest : `npm i vitest -D`

创建测试文件

```ts
// tests\example.test.ts
import { test, expect } from "vitest";

test("common matcher", () => {
  const name = "Alice";
  expect(name).toBe("Alice");

  expect(1 + 2).toBe(3);
  expect(1 + 2).not.toBe(1);
});
```

运行测试文件并监测文件的变化 : `npx vitest example`

#### 基于 Vue 的测试工具

- vue-test-utils : https://test-utils.vuejs.org/
- vue-testing-library : https://testing-library.com/
