/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

 const colors = [
  {
   color: 'red',
   htmlId: document.getElementById('red')
  },
  {
   color: 'green',
   htmlId: document.getElementById('green')
  },
  {
   color: 'yellow',
   htmlId: document.getElementById('yellow')
  },
  {
   color: 'blue',
   htmlId: document.getElementById('blue')
  }
 ]

 colors.forEach(prop => {
  prop.htmlId.addEventListener('click', function () {
   document.body.style.backgroundColor = `${prop.color}`;
  })
 })
})();
