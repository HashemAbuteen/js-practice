const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    }
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    }
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    }
    }
];

function getNames(data) {
    return data.map(val => val.name);
}
console.log(getNames(data)); 


function before1990(data) {
    return data.filter(val => new Date(val.birthday).getFullYear() < 1990);
}
console.log(before1990(data)); 

function getFoods(data) {
    let foodCount = {};
    data.forEach(val => {
        for (const key in val.favoriteFoods) {
            val.favoriteFoods[key].forEach(food => {
                foodCount[food] = (foodCount[food] || 0) + 1;
            });
        }
    });
    return foodCount;
}
console.log(getFoods(data)); 

