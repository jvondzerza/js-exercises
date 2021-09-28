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
    const button = document.getElementById('run');

    const dob = document.getElementById('dob-day');
    const mob = document.getElementById('dob-month');
    const yob = document.getElementById('dob-year');

    const date = new Date();
    const currentDate = [ date.getDate(), date.getMonth() + 1, date.getFullYear() ];

    button.addEventListener('click', function() {
        const birthday = [ parseInt(dob.value), parseInt(mob.value), parseInt(yob.value) ];

        let age = currentDate[2] - birthday[2];
        let month = currentDate[1] - birthday[1];

        if (month < 0 || (month === 0 && currentDate[0] < birthday[0])) age--;

        alert(`You are ${age} years old.`)
    })
})();
