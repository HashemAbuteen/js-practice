function Square(a, b, c, d){
this.a = a;
this.b = b;
this.c = c;
this.d = d;
}

function isSquare(obj) {
    return this.a === this.b && this.b === this.c && this.c === this.d;
}

Object.assign(Square.prototype , {isSquare});

const square = new Square(5,5,5,5);

console.log(square.isSquare());