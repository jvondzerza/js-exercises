/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button = document.getElementById('run');
    let input = document.getElementById('hero-id');

    let fetched = async () => {
        await fetch('../../_shared/api.json')
            .then(result => result.json())
            .then(data => {
                button.addEventListener('click', () => {
                    data.heroes.forEach(hero => {
                            let xPerson = document.getElementById('tpl-hero').content.cloneNode(true);
                            xPerson.querySelector('.name').innerText = hero.name;
                            xPerson.querySelector('.alter-ego').innerText = hero.alterEgo;
                            xPerson.querySelector('.powers').innerText = hero.abilities;
                            let target = document.getElementById("target");
                            target.appendChild(xPerson);
                    })
                })
            })
    }
    fetched();

})();
