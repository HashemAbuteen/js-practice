const percentageOfWorld = (population) => {
    const worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

const populations = [3000, 4500, 500, 200];

const populationPercentages = (population) => {
  const percentages = [];
  
  for(let i=0; i < population.length; i++) {
      percentages.push(percentageOfWorld(population[i]));
  }
  return percentages;
}

console.log(populationPercentages(populations))
