// StringCalcultor class
class Stringcalculator {
  constructor() {}

  // Add () {//Test case passed 1
  //     return 0;
  // }

  Add(numbers) {
    //Test case passed 1-2
    if (numbers !== undefined && numbers.length > 0) {
      const numberArray = numbers.split(",").map((num) => parseInt(num));
      const sum = numberArray.reduce((acc, num) => acc + num, 0);
      return sum;} 
      else {
        return 0;
    }
  }

  
}

//For testing the code base in the terminal

//Writing the unit testcases

describe("The String Calculator using Test Driven Development", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Stringcalculator();
  });

  it("Create a simple String calculator", () => {
    const result = calculator.Add();
    expect(result).toBe(0);
    const result1 = calculator.Add("");
    expect(result1).toBe(0);
  });

  it("Add method should return the sum of one number, two number, many number", () => {
    const result = calculator.Add("2");
    expect(result).toBe(2);
    const result2 = calculator.Add("2,3");
    expect(result2).toBe(5);
    const result3 = calculator.Add("2, 3, 57, 78");
    expect(result3).toBe(140);
  });

  it("should return the correct sum for numbers seperated by new lines and commas", () => {
    const result = calculator.Add("1\n2\n3\n4\n5");
    expect(result).toBe(15);
    const result2 = calculator.Add("1\n2,3\n4,5");
    expect(result2).toBe(15);
  });

 
});
