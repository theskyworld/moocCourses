import axios from "axios";

// 一个用于被测试的函数
export function testFn(num: number, callback: (num: number) => void) {
  if (num > 10) {
    callback(num);
  }
}

export async function requestData() {
  const { data } = await axios.get("some fake url");
  return data;
}
