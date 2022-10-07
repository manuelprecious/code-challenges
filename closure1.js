// INSTRUCTIONS

/**
 * Write a function called specialMultiply which accepts two parameters. If the function is passed both 
 * parameters, it should return the  product of the two. If the function is only passed one parameter - 
 * should return a function which can later be passed another parameter to return the product. You will have to use
 * closure and arguments to solve this.
 * 
 * Examples:
 * 
 *          specialMultiply(3, 4); // 12
 *          specialMultiply(3)(4); // 12
 *          specialMultiply(3); // 12 function()
 *          {}....
 */

function specialMultiply(a, b) {
    if (arguments.length === 2) return a*b;
    else{
        return function(b){
            return a*b;
        }
    }
}


/**
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a paramter called 
 * guess. In the other function, you should create a variable called answer which is the result of a 
 * random number between 0 and 10 as well as a variable called guesses which should
 * be set to 0.
 * 
 * 
 * In the inner function, if the guess passed in is the 
 * same as the random number (defined in the outer function)
 *  - you should return the string "you got if!." If the guess is too high return "Your guess is
 * too high!" and if it is too low, return "Your guess is too low!".
 * You should stop the user from guessing if the amount of guesses they have made is 
 * greater than the inital amount passed to the outer function.
 * 
 * You will have to make use of closure to solve this problem.
 * 
 * Examples (yours might not be like this, since the answer is random every time):
 * 
 *      var game = guessingGame(5)
 *      game(1) // "You're too low!"
 *      game(8) // "You're too high!"
 *      game(5) // "You're too low!"
 *      game(7) // "You got it!"
 *      game(1) // "you're all done playing!"
 * 
 *      var game2 = guessingGame(3)
 *      game2(5) // "You're too low!"
 *      game2(3) // "You're too low!"
 *      game2(1) // "No more guesses the answer was 0"
 *      game2(1) // "You are all done playing!"
 */

function guessingGame(amount){
    let answer = Math.floor(Math.random()*10);
    let guesses = 0;
    return function(guesses){
        //debugger;
        if(guesses<amount){
            if(guesses === answer) return "You got it!";
            if(guesses>answer) return "To high!";
            else return "Too low!";
            guesses++;
        }

        else return "Start a new Game";
    }
}

console.log(guessingGame(3))