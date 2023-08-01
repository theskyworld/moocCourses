// 将calculator.d.ts文件中的内容放在node_modules/@types/calculator/index.d.ts文件下
// 并在其中导出calculator，实现能够通过以下的方式直接自动寻找并导入
import calculator from "calculator";
import { Calculator } from "calculator";

calculator.plus([2, 1]);
calculator.minus([2, 1]);
calculator("minus", [1, 2]);
