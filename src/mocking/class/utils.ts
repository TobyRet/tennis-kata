import { Calculator } from './calculator';

export function calculateTotal(items: number[]) {
  const calc = new Calculator();
  let total = 0;
  items.forEach((item:number) => {
    total = calc.add(total, item);
  });
  return total;
}