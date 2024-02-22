import fizzBuzz  from "./fizzBuzz";

describe("FizzBuzz", () => {
  it("deberia retornar el numero si no es divisible por 3 ni por 5", () => {
    expect(fizzBuzz(7)).toEqual("7");
  });
  
});