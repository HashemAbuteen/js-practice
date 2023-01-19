const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

let i = 0;
let j = 0;
while (i < listOfNeighbours.length) {
  while (j < listOfNeighbours[i].length) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    j++;
  }
  i++;
  j = 0;
}