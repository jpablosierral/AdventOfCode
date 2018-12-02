const input = document.body.getElementsByTagName('pre')[0].innerHTML;
const deltas = input.split(/\n/g).filter(value => value !== '').map(Number);
const seen = {};
let frequency = 0;
let firstTwice;

while (firstTwice === undefined) {
    for (const delta of deltas) {
        frequency += Number(delta);
        if (seen[frequency]) {
            firstTwice = frequency;
            break;
        }
        seen[frequency] = true;
    }
}

console.info('First frequency reaches twice: ' + firstTwice);