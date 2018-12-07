const input = document.body.getElementsByTagName('pre')[0].innerHTML
    .split(/\n/g)
    .filter(value => value !== '');

let twice = 0,
    threeTimes = 0,
    twiceInserted,
    threeTimesInserted,
    auxArray,
    auxArray2;

input.forEach(boxId => {
    auxArray = [];

    for (let index = 0; index < boxId.length; index++) {
        const element = boxId[index];
        if(auxArray[element] === undefined){
            auxArray[element] = 0;
        }
        auxArray[element] += 1;
    }
    
    auxArray2 = Object.entries(auxArray);
    twiceInserted = threeTimesInserted = false;

    for (let index = 0; index < auxArray2.length && (!twiceInserted || !threeTimesInserted); index++) {
        const element = auxArray2[index];
        if(!twiceInserted && element[1] === 2){
            twiceInserted = true;
            twice += 1;
        }
        if(!threeTimesInserted && element[1] === 3){
            threeTimesInserted = true;
            threeTimes += 1;
        }
    }
});


console.info('Result: ' + (twice * threeTimes));