/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let button = document.getElementById('run');
    let dob = document.getElementById('dob-day');
    let mob = document.getElementById('dob-month');
    let yob = document.getElementById('dob-year');

    let date = new Date();
    let current = [ date.getDate(), date.getMonth() + 1, date.getFullYear() ];

    button.addEventListener('click', function() {
        let birthday = [ Number(dob.value), Number(mob.value), Number(yob.value) ];
        let age = current[2] - birthday[2];
        let month = current[1] - birthday[1];

        if (month < 0 || (month === 0 && currentDate[0] < birthday[0])) age--;
        alert(`${age} years young.`)
    })
})();
