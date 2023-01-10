function printNumbers(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && i.toString().indexOf("7") !== -1) {
            output += "BOOM-BOOM,";
        } else if (i % 7 === 0) {
            output += "BOOM,";
        } else {
            output += i + ",";
        }
    }
    console.log(output.slice(0,-1));
}


printNumbers(18);
