/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function infoRequest() {
        let age = prompt('Age?');
        let gender = prompt("Gender?");
        let town = prompt("Current town of residence?");

        let response = confirm("Please confirm your details: \n" + "Age: " + age + '\n' + "Gender: " + gender + '\n' + "Town: " + town);

        if (response) alert('Thank you.');
        else infoRequest();
    }

    infoRequest();
})();
