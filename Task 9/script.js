/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
let title = "Anime";
let director = "Myasaki";
let budget = 150000000;

class movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.costs = () => {
      if (this.budget > 100000000) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const wasExpensive = new movie(
  "PartyCasino",
  "hopefullyInJail",
  10000000000000
);

alert("expensive af - " + wasExpensive.costs());
