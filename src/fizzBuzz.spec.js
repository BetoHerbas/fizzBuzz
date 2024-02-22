import fizzBuzz from "./fizzBuzz";

describe("FizzBuzz", () => {

    it("return the number if isn't divisible by 3 or 5", () => {
        expect(fizzBuzz(3)).toEqual("7");
    });
    it("return Fizz if the number is divisible by 3 like 3", () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });
    it("return Fizz if the number is divisible by 3 like 9"), () => {
        expect(fizzBuzz(9)).toEqual("Fizz");
    }
    it("return Buzz if the number is divisible by 5 like 5"), () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    }

});