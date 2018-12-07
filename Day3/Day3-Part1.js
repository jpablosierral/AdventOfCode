const input = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '');

let result = 0;
let fabric = Array(1).fill().map(() => Array(0).fill());

input.forEach(element => {
    const aux = element.split(' ');
    const position = aux[2].split(':')[0].split(',');
    const size = aux[3].split('x');
    const left = parseInt(position[0]);
    const top = parseInt(position[1]);
    const wide = parseInt(size[0]);
    const tall = parseInt(size[1]);

    for (let i = 0; i < wide; i++) {
        for (let j = 0; j < tall; j++) {
            if (fabric[left + i] === undefined){
                fabric[left + i] = [];
            }
            if (fabric[left + i][top +j] === undefined){
                fabric[left + i][top +j] = 0;
            }
            fabric[left + i][top +j] += 1;
            if(fabric[left + i][top +j] === 2){
                result += 1;
            }
        }
    }
});

console.info('Result: ' + result);