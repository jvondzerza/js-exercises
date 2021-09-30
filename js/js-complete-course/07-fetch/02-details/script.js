/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
                    data.heroes.map(obj => {
                        if (input.value == obj.id) {
                            const temp = obj;
                            console.log(temp)
                            let xPerson = document.getElementById('tpl-hero').content.cloneNode(true);
                            xPerson.querySelector('.name').innerText = temp.name;
                            xPerson.querySelector('.alter-ego').innerText = temp.alterEgo;
                            xPerson.querySelector('.powers').innerText = temp.abilities;
                            let target = document.getElementById("target");
                            target.appendChild(xPerson);
                        }
                    })
                })
            })
    }
    fetched();


})();
