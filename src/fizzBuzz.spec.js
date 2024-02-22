import fizzBuzz from "./fizzBuzz";

describe("FizzBuzz", () => {

    it("return the number if isn't divisible by 3 or 5", () => {
        expect(fizzBuzz(3)).toEqual("7");
    });

});