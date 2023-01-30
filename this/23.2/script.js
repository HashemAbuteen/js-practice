const storm = {
    superPower : "Flying",
    printSuperPower : printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " +
    this.superPower);
}

storm.printSuperPower();