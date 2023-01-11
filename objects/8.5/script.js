const swapPropertiesValues = (obj) => {
    let newObj = {};
    for(let key in obj){
        newObj[obj[key]] = key;
    }
    return newObj;
}

const myObj = {name: "John", age: 25, job: "Developer"};
console.log(swapPropertiesValues(myObj))
