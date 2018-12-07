const input = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '');

let candidate = '';
let fabric = Array(1).fill().map(() => Array(0).fill());
let candidates = [];

input.forEach(element => {
    const aux = element.split(' ');
    const id = aux[0].split('#')[1];
    const position = aux[2].split(':')[0].split(',');
    const size = aux[3].split('x');
    const left = parseInt(position[0]);
    const top = parseInt(position[1]);
    const wide = parseInt(size[0]);
    const tall = parseInt(size[1]);

    candidates.push(id);
    
    for (let i = 0; i < wide; i++) {
        for (let j = 0; j < tall; j++) {
            if (fabric[left + i] === undefined){
                fabric[left + i] = [];
            }
            if (fabric[left + i][top +j] === undefined){
                fabric[left + i][top +j] = [];
            }
            fabric[left + i][top +j].push(id);
        }
    }
});

for (let i = 0; i < fabric.length; i++) {
    for (let j = 0; j < fabric[i].length; j++) {
        if (fabric[i][j] !== undefined && fabric[i][j].length > 1){
            for (let k = 0; k < fabric[i][j].length; k++) {
                const index = candidates.indexOf(fabric[i][j][k]);
                if (index > -1){
                    candidates.splice(index, 1);
                }
            }
        }
    }
}

console.info('Result: ' + candidates[0] + ' (of ' + candidates.length + ')');