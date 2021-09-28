/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let one
    let two
    let result
    document.getElementById("addition").addEventListener("click", function() {
        one = document.getElementById('op-one').value;
        two = document.getElementById('op-two').value;
        result = Number(one) + Number(two);
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        one = document.getElementById('op-one').value;
        two = document.getElementById('op-two').value;
        result = Number(one) - Number(two);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        one = document.getElementById('op-one').value;
        two = document.getElementById('op-two').value;
        result = Number(one) * Number(two);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        one = document.getElementById('op-one').value;
        two = document.getElementById('op-two').value;
        result = Number(one) / Number(two);
        alert(result);
    });
})();
