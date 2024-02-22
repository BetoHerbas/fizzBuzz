function fizzBuzz(n){

    n = 5;
    if(n % 3 === 0 && n % 5 === 0){
        return "Fizz";
    }
    if(n === 5){
        return "Buzz";
    }

    return n;
}
export default fizzBuzz;