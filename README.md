# Test-Driven-Development-in-Action

## How to install on Local machine
1.Clone the repo.(For refernce sew : https://www.youtube.com/watch?v=EhxPBMQFCaI)
2.Go to the root directory and opeen Vs Code .In the terminal run the command "npm install" this will install all the required dependencies.
3.The project has 2 files one shows the serial development stages and another has the final class that we build using TDD.
4.You can also check commit history to look at the code development at different stages.
5.For running the test you can run the command "npm run test" in the vs code terrminal.

## Problem statement 
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

## How I approached it
1.I clubbed 2-3 similar kind of test cases together as i was confident enough that i could code them easily.

2.First wrote the test case then it failed then wrote the function and againg ran the test cases if they passed then moved on to write the next test case.

3.I made two files one in which the final code is written.It has 'final' written in the file name and another in which I have  shown the  each function that I wrote for each test cases also one can follow the commit history to go about the code development part.

4.The most facinating thing about TDD is the code logic that looks daunting at the start when you reach there you realize that it has reduced to a mere 5-6 lines of additional code which makes coding the most difficult of the really life problems  very easy.

## Key Takeaways after doing the Project are:
Three Rules of test driven development:
1.Write tests before writing code: In TDD, you start by writing a failing test that defines the desired behavior of a specific piece of code. This test should fail initially since the code hasn't been implemented yet.

2.Write the simplest code to pass the test: After writing the failing test, you write the minimum amount of code required to make that test pass. The code should be simple and focused on meeting the requirements of the test.

3.Refactor the code: Once the test passes, you refactor the code to improve its design, readability, and maintainability without changing its behavior. Refactoring ensures that the code remains clean and easy to understand while still passing all the tests.

## Some recommendations and thoughts
1.I would highly recommend to go through writing each and every unit test seperately and then failing and then writing the code that passes .It will help you appriciate the process code developement and you will see how TDD is the way to go for very large scale applications as the Debugging time almost reduces to zero.

2.IN TDD every step becomes the right step.TDD is equal to building a very large sky scraper it's just that you are putting the next brick only after the present one is perfectly in sync with other blocks.  

3.The Down Side is in the starting it will take a lot of time but you get a hang of it after using it 2-3 times and then it will become a part of you.

4.You won't really understand the magic of test drieven development untill you try it youself 

5.I did the project three times just to drill the method in my mind and every time i could see the patterns in the development style eveolved.First by writing each and every unit test case (I also thought it was very time consuming and boring) but the fun begain at the fourth step where I realised that if I would have directly jumped at that point without building the initial pieces first it would have been time consuming to think but with TDD I harly wrote 5-6 lines and it started working that was the eureka movement that this thing works like magic.

6.TDD is equivalent to when someone says to climb the Mount Everest and you say it is very far and your fortitude may crumble looking at the magnitude of the adversity but TDD say just look at the next step first take that then think about the other and taking one step is very easy and so is the next and after taking many many steps one after the other you will be  able to climb the Everest .And that's similar to what TDD is it is a step by step approach development.Write the test ,then fail and then write the code that passes it ,and again repeat it. 

7.In one line TDD is: TEST->FAIL->CODE->PASS->REPEAT.


