function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    //let combination = 1;
    let combination = 0;
 
    let flag = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combination++; // added
            let sum = i + j;
            if (sum === magic) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magic})`);
                flag = true;
                break;
            }
 
 
            //combination++;
        }
 
        if (flag === true) {
            break;
        }
    }
 
    if (flag === false) {
       // console.log("No combination.");
        console.log(`${combination} combinations - neither equals ${magic}`); 
    }
}