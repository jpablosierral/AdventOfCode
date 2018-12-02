const result = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '')
    .map(Number)
    .reduce((acc, change) => acc + Number(change), 0);

console.info('Result: ' + result);