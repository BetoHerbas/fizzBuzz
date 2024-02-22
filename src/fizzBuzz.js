function fizzBuzz(n){
    const Buzz = 5;
    if(n % 3 === 0){
        return "Fizz";
    }
    if(Buzz === 5){
        return "Buzz";
    }
    
    return n + "";
}
export default fizzBuzz;