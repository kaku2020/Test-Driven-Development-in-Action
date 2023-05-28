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
})