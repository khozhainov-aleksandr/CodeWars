'use strict';

// Get average age

function getAverageAge(years) {
    let res = [];

    if (years.toString() === '') { return 0; }

    for (let i = 0; i < years.length; i++) {
        let year = years[i].split('-').map(el => Number(el));
        res.push(year[1] - year[0]);
    }
    
    return Math.round( res.reduce((sum, el) => (sum + el)) / years.length );
}

console.log(getAverageAge([
    '1907-1997',
    '1761-1833',
    '1535-1582',
    '1918-2012',
    '1877-1968',
    '1696-1724',
    '1602-1642',
    '1692-1743',
    '1695-1762',
    '1570-1636',
    '1762-1807',
    '1668-1731',
  ])); // 63