const movies = [
    `Gate to Heaven`,
    `Tout S'est Bien Passe`,
    `Herself`,
    `Dune`,
    `Delicieux`,
    `Benedetta`,
    `Respect`,
    `Titane`,
    `Give me liberty`,
    `Une Vie Demente`,
    `Paw Patrol`,
    `Wolf Walkers`
];
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const reversed = movies.reverse();

document.write(`<ul>`);
reversed.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ul>`);

