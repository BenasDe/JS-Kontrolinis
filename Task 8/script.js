/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function calc(a, b) {
  this.sum = a + b;
  this.subtraction = a - b;
  this.multiplication = a * b;
  this.division = a / b;
  this.print = function () {
    console.log(this.sum + " sum");
    console.log(this.subtraction + " subtraction");
    console.log(this.multiplication + " multiplication");
    console.log(this.division + " division");
  };
}
const input = new calc(9, 3);
input.print();
