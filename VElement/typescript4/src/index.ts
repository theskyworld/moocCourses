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

// 泛型约束
// 定义一个包含length属性的对象接口，例如字符串、数组等
interface ObjWithLength {
  length: number;
}

function echoObjWithLength<T extends ObjWithLength>(input: T): T {
  return input;
}

echoObjWithLength([1, 2, 3]);
echoObjWithLength("hello");
echoObjWithLength({
  length: 3,
  content: "txt",
});
// echoObjWithLength(true); // 报错

// 在队列中使用泛型
// 封装一个队列
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(3);
// queue.push("3"); // 报错
const poped = queue.pop();
if (poped) {
  console.log(poped.toFixed(3)); // "3.000"
}

// 泛型在接口中使用
interface KeyPair<K, V> {
  key: K;
  value: V;
}

const kp1: KeyPair<number, string> = {
  key: 1,
  value: "hello",
};
const kp2: KeyPair<number, number[]> = {
  key: 2,
  value: [1, 2, 3],
};

// 字面量类型的使用
type Directions = "up" | "down" | "left" | "right";
const toWhere: Directions = "up";


// 公用类型，例如Pick,Omit,Partial等
// https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content