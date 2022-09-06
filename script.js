'use strict';



// Do it later !!!



// Which section did you scroll to?
// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef/train/javascript

function getSectionIdFromScroll(scrollY, sizes) {
  let res;

  sizes.forEach((element, index) => {
    let y = scrollY;

    if (scrollY % 100 === 0 ) {
      y -= 101;
    }

    let x = element - y;

    if (x >= 0 && x <= 99) {
      res = index;
    }
  });

  const f = sizes.filter(el => (el > scrollY));

  return (f.length === 0) ? -1 : res;
}

console.log('return', getSectionIdFromScroll(299,[300,200,400,600,100])); // 0

console.log('return', getSectionIdFromScroll(300, [300,200,400,600,100])); // 1

console.log('return', getSectionIdFromScroll(1600, [300,200,400,600,100])); // -1