var values = document.body.getElementsByTagName('pre')[0].innerHTML.split('\n').filter(item => item !== ''),
    result = 0;


values.forEach(function (value) {
    result += parseInt(value);
});

console.info('Result: ' + result);