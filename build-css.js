const data = require('./data/trolls.json');
const writeFile = require('write');

function extractProp(styles) {
  let value = '';
  for (var prop in styles) {
    value = value.concat(`${prop}: ${styles[prop]};`);
  }
  return value;
}

function getTrollCSS(troll) {
  return `.${troll.name} {
    ${extractProp(troll.styles)}  
  }\n`;
}

let css = '';
data.trolls.forEach(troll => {
  css = css.concat(getTrollCSS(troll));
});

writeFile('./dist/styles.css', css);
