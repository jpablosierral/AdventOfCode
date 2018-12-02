const input = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '');

//console.info('Result: ' + result);