let myCountry = {
    country: "Finland",
    capital: "Helsinki",
    language: "Finnish",
    population: 6000000,
    neighbours: ["Sweden", "Norway", "Russia"],
    describe: function() {
        return `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function() {
        this.isIsland = (this.neighbours.length > 0) ? false : true;
    }
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);