/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let value = document.getElementById('number').value
        console.log(`your input is ${value}`)

            function factorialize(num) {
            let result = num;
            if (num === 0 || num === 1)
                return 1;
            while (num > 1) {
                num--;
                result *= num;
            }
            return result;
        }

        console.log(`${value}! is ${factorialize(value)}`);


    });

})();
