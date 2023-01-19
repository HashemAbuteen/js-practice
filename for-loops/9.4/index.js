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