/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let one = document.getElementById('op-one');
    let two = document.getElementById('op-two');

    let performOperation = (operation) => {

        // perform the operation

        switch (operation) {
            case 'addition':
                result = parseInt(one.value) + parseInt(two.value);
                alert(result);
                break;
            case 'substraction':
                result = parseInt(one.value) - parseInt(two.value);
                alert(result);
                break;
            case 'multiplication':
                result = parseInt(one.value) * parseInt(two.value);
                alert(result);
                break;
            case 'division':
                result = parseInt(one.value) / parseInt(two.value);
                alert(result)
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
