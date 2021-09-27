const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const uCFirst = sentence => {
  const words = sentence.split(``);
  words[0] = words[0].toUpperCase()
  words.forEach(word => {
    const letters = word.split('');
  });
  return words.join("");
};

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
