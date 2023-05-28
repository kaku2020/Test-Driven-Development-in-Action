// StringCalcultor class
class Stringcalculator {
    constructor() {}

    Add () {//Test case passed 1
        return 0;
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
        const result = calculator.Add(2);
        expect(result).toBe(2);
        const result2 = calculator.Add("2,3");
        expect(result2).toBe(5);
        const result3 = calculator.Add("2, 3, 57, 78");
        expect(result3).toBe(140); 

    });
})