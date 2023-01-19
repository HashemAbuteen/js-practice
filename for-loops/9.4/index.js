const steps = (n) => {
    for (let i = 1; i <= n; i++) {
        let step = "#".repeat(i);
        if(i !== n){
            step = step + "-";
        }
        console.log(step);
    }
}

steps(5);

const stepsWithNoRepeat = (n) => {
    for (let i = 1; i <= n; i++) {
        let step = "#";
        while(step.length < i){
            step += "#";
        }
        if(i !== n){
            step += "-";
        }
        console.log(step);
    }
}

stepsWithNoRepeat(10);