'use strict';

// Categorize New Member

function openOrSenior(data) {
    let list = [];

    data.forEach(element => {
        (element[0] >= 55 && element[1] > 7) ? list.push('Senior') : list.push('Open')
    });

    return list;
}

console.log( openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) ); // ['Open', 'Senior', 'Open', 'Senior']
console.log( openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) ); // ['Senior', 'Open', 'Open', 'Open']