/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let text = document.getElementById('target').innerHTML;
    let count = 0;
    document.getElementById('target').innerHTML = "";
    let delay = Math.floor(Math.random() * 51) + 50;

    (function effect () {
        if (count < text.length) {

            document.getElementById('target').innerHTML += text.charAt(count);
            count++;
            setTimeout(effect, delay);

        }
    })();




})();
