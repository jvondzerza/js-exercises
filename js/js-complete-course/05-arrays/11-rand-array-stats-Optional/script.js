/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', () => {

        let numbers = []

        for (i=0 ; i<10; i++) {
            numbers[i] = Math.floor(Math.random() * 100) + 1;
            let tableData = document.querySelectorAll('td');
            let tableArr = Array.from(tableData);
            tableArr[i].innerHTML = numbers[i];
        }
        let largest = Math.max(...numbers);
        document.getElementById("max").innerHTML = (largest);

        let smallest = Math.min(...numbers);
        document.getElementById("min").innerHTML = (smallest);

        let sum = numbers.reduce(function(a, b) {
            return a+b;
        }, 0);
        document.getElementById("sum").innerHTML = (sum);

        let average = sum / numbers.length;
        document.getElementById('average').innerHTML = (average);

    })

})();
