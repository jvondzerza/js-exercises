/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener('click', async() => {

        let articles = await window.lib.getPosts()
        articles.forEach((article) => {
            article.comments = window.lib.getComments(article.id)
            console.table(article)
        })
    })
})();
