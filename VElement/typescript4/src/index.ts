// 使用接口定义函数类型
interface AddNums {
  (a: number, b: number): number;
}

const addNum: AddNums = (a: number, b: number): number => a + b;
console.log(addNum(1, 5));

// 类型断言
function getLength1(input: number | string): number {
  const str = input as string;
  // string
  if (str.length) {
    return str.length;
    // number
  } else {
    const num = input as number;
    return num.toString().length;
  }
}

// 等价于使用类型守护
function getLength2(input: number | string): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
