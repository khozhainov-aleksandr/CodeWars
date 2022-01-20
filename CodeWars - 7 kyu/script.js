'use strict';

// Friend or Foe?

function friend(friends){
    return friends.filter((el) => ( el.length <= 4 && isNaN( Number(el) ) ));
}

console.log( friend(["Ryan", "Kieran", "Mark"]) ); // ["Ryan", "Mark"]
console.log( friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) ); // ["Ryan"]
console.log( friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) ); // ["Jimm", "Cari", "aret"]
console.log( friend(["Love", "Your", "Face", "1"]) ); // ["Love", "Your", "Face"]