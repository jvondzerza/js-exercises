/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

            let square = function (n) {
                return n > 0 && Math.sqrt(n) % 1 === 0;
            };

            for (num = 1; num <= 21; num++){

                if (square(num)===true){
                    console.log(num)
                };
            }

        });


})();
