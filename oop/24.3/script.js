class MyArray {
    constructor(array){
        this.array = array;
    }
    find(callback){
        for(let i = 0 ; i < this.array.length ; i++){
            if(callback(this.array[i])){
                return this.array[i];
            }
        }
        return undefined;
    }
    filter(callback){
        const array = [];
        for(let i = 0 ; i < this.array.length ; i++){
            if(callback(this.array[i])){
                array.push(this.array[i]);
            }
        }
        return array;
    }
    reduce (callback , init){
        let i =0 ;
        if(!init){
            init = this.array[0];
            i = 1;
        }
        let acc = init;
        for(; i < this.array.length ; i++){
            acc = callback( acc, this.array[i]);
        }
        return acc;
    }
}

const array1 = [1,2,3,4,5,6];
console.log(array1.find(a => a===3));

const array2 = new MyArray([1,2,3,4,5,6]);
console.log(array2.find(a => a===3));

console.log(array1.filter(a => a%2===0));
console.log(array2.filter(a => a%2 === 0));

console.log(array1.reduce((a,b) => a+b));
console.log(array2.reduce((a,b) => a+b));
