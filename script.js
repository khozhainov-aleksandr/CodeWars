'use strict';

// Which section did you scroll to?

function getSectionIdFromScroll(scrollY, sizes) {

}

console.log('===>', getSectionIdFromScroll(299,[300,200,400,600,100])); // 0

console.log('===>', getSectionIdFromScroll(300, [300,200,400,600,100])); // 1

console.log('===>', getSectionIdFromScroll(1600, [300,200,400,600,100])); // -1
