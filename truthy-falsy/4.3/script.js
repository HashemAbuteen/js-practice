const results = [
    {name:"Jhon" , scores:[89 , 120 , 103]},
    {name:"Mike" , scores:[116 , 94 , 123]},
    {name:"Mary" , scores:[97 , 134 , 105]}
]
const avg = results.map(e => {
    e.average = (e.scores[0]+e.scores[1]+e.scores[2])/3;
})

const max = Math.max(...results.map(e => e.average));
const winners = results.filter(e => e.average === max);
console.log("Scores: ");
console.log(results);
console.log("Winners: ");
console.log(winners);
