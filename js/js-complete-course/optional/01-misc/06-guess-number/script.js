/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = Math.floor(Math.random() * 100) + 1;
    console.log(x);
    let guess = window.prompt("Guess the number between 1 and 100.");
    let guesses = 0;
    do {
        if (guess < x) {
            guess = window.prompt("Higher!");
        } else if (guess > x) {
            guess = window.prompt("Lower!");
        }
        guesses++;
    } while (guess != x);

    if (guess == x) {
        if (guesses === 1) {
            alert("First try! It only took " + (guesses) + " guess!")
        } else {
            guesses++;
            alert("You took " + guesses + " guesses.");
        }
    }


})();
