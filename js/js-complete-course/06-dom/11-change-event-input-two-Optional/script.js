/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("keyup", function(){
        let input = document.getElementById('pass-one').value;
        let numberCheck = /[0-9]/g;
        let found = input.match(numberCheck);

        if(input.length >= 8 && found.length > 1){
            document.getElementById('validity').innerText = 'Ok';
        } else {
            document.getElementById('validity').innerText = 'Not ok';
        }
    })

})();
