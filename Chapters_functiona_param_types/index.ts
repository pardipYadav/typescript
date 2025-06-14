console.log("function params types");
function totalPrice() {
  let total = 100;
  let item = 50;
  console.log(total + item);
}
console.log(totalPrice());

function totalPriceWithParam(
  item: number,
  total: number,
  text?: string | undefined
) {
  console.log((text ? text : "") + (item + total));
}
totalPriceWithParam(5, 8, "the total price is ");
