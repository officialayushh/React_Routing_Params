import React from "react";
import { useSearchParams } from "react-router-dom";
function operatorResult(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;

    default:
      return;
  }
}
export const Calculator = () => {
  const [search, setSearch] = useSearchParams();
  const num1 = search.get("num1");
  const operator = search.get("op");
  const num2 = search.get("num2");

  const result = operatorResult(Number(num1), Number(num2), operator);
  console.log(num1);
  return (
    <div>
      Your calculation Result is <span id="calc-result">{result}</span>
    </div>
  );
};
