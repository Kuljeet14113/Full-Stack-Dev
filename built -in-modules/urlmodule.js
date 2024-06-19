const url = require('url')

const myURL =new URL('https://hpparamsolution.org:0369');
myURL.pathname:'/folder/subfolder';
myURL.search='?name=Jay';
myURL.hash='#searchFile.ppt';

console.log(myURL);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);