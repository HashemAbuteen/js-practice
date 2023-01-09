function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

const percentageOfWorld2 = (population) => {
    const worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}
  

const chinaPercentage1 = percentageOfWorld1(1441);
const indiaPercentage1 = percentageOfWorld1(1353);
const usaPercentage1 = percentageOfWorld1(327);

const chinaPercentage2 = percentageOfWorld2(1441);
const indiaPercentage2 = percentageOfWorld2(1353);
const usaPercentage2 = percentageOfWorld2(327);

console.log(`China represents ${chinaPercentage1}% of the world population using percentageOfWorld1`);
console.log(`India represents ${indiaPercentage1}% of the world population using percentageOfWorld1`);
console.log(`USA represents ${usaPercentage1}% of the world population using percentageOfWorld1`);

console.log(`China represents ${chinaPercentage2}% of the world population using percentageOfWorld2`);
console.log(`India represents ${indiaPercentage2}% of the world population using percentageOfWorld2`);
console.log(`USA represents ${usaPercentage2}% of the world population using percentageOfWorld2`);

