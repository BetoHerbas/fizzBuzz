import fizzBuzz from "./fizzBuzz";

function generateFizzBuzz(n){
    let result = "";
    for(let i = 1; i <= n; i++){
        result += fizzBuzz(i) + " ";
    }
    return result;
}

export default generateFizzBuzz;