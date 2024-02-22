function fizzBuzz(n){

    if(n % 3 === 0 && n % 5 === 0){
        return "Fizz";
    }
    return n;
}
export default fizzBuzz;