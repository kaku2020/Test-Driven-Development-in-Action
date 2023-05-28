# Test-Driven-Development-in-Action

## How to install on Local machine
1.Clone the repo.(For refernce sew : https://www.youtube.com/watch?v=EhxPBMQFCaI)
2.Go to the root directory and opeen Vs Code .In the terminal run the command "npm install" this will install all the required dependencies.
3.The project has 2 files one shows the serial development stages and another has the final class that we build using TDD.
4.You can also check commit history to look at the code development at different stages.
5.For running the test you can run the command "npm run test" in the vs code terrminal.

### Problem statement 
String Calculator TDD Kata
Create a simple String calculator with a method signature:

int Add(string numbers)
The method can take up to two numbers, separated by commas, and will return their sum.

For example "" or "1" or "1,2" as inputs. (for an empty string it will return 0)

Hints:

Start with the simplest test case of an empty string and move to one and two numbers
Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
Remember to refactor after each passing test
Allow the Add method to handle an unknown amount of numbers

Allow the Add method to handle new lines between numbers (instead of commas).

The following input is ok: "1\n2,3" (will equal 6)
The following input is NOT ok: "1,\n" (not need to prove it - just clarifying)
Support different delimiters

To change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]" for example "//;\n1;2" should return three where the default delimiter is ";"
The first line is optional. all existing scenarios should still be supported
Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.

If there are multiple negatives, show all of them in the exception message.

### Key Takeaways after doing the Project are:
Three Rules of test driven development:
1.Write tests before writing code: In TDD, you start by writing a failing test that defines the desired behavior of a specific piece of code. This test should fail initially since the code hasn't been implemented yet.

2.Write the simplest code to pass the test: After writing the failing test, you write the minimum amount of code required to make that test pass. The code should be simple and focused on meeting the requirements of the test.

3.Refactor the code: Once the test passes, you refactor the code to improve its design, readability, and maintainability without changing its behavior. Refactoring ensures that the code remains clean and easy to understand while still passing all the tests.

#### Some recommendations 
1.I would highly recommend to go through writing each and every unit test seperately and then failing and then writing the code that passes .It will help you appriciate the process code developement and you will see how TDD is the way to go for very large scale applications as the Debugging time almost reduces to zero.

2.Every step becomes the right step.TDD is equal to building a very large sky scraper it's just that you are putting the next brick only after the present one is perfectly in sync with other blocks.  
