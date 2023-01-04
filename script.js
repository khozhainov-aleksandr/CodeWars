'use strict';

// How many lightsabers do you own?

const howManyLightsabersDoYouOwn = (name) => name === 'Zach' ? 18 : 0;

console.log('✅', howManyLightsabersDoYouOwn()); // 0
console.log('✅', howManyLightsabersDoYouOwn("Adam")); // 0
console.log('✅', howManyLightsabersDoYouOwn("Zach")); // 18