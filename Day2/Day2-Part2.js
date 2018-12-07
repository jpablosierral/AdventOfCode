const input = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '');

let aStr1, aStr2, diff, candidate = '';

for (let index = 0; index < input.length && candidate === ''; index++) {
    const aStr1 = input[index].split('');

    for (let index2 = 0; index2 < input.length && candidate === ''; index2++) {

        if(index !== index2){
            const aStr2 = input[index2].split('');

            diff = [];

            for (let i = 0; i < aStr1.length && diff.length < 2; i++) {
                if(aStr1[i] !== aStr2[i]) {
                    diff.push(aStr1[i]);
                }
            }

            if (diff.length === 1){
                candidate = input[index].replace(diff[0], '');
            }
        }
    }
}


console.info('Result: ' + candidate);