'use strict';

// Who is the killer

const person = {
  'Peter': ['Lucy', 'Kyle'],
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
};

const dead = ['Lucas', 'Bill'];

// function getKiller(suspects, dead) {
//   return Object.keys(suspects).find(x => dead.every(y => suspects[x].includes(y)));
// }

function getKiller(suspects, dead) {
  const allKillers = Object.keys(suspects);
  const allDeads = Object.values(suspects);

  let arrRes = [];

  for (let i = 0; i < allDeads.length; i++) {

    let eachPerson = [allKillers[i]];
    for (let j = 0; j < allDeads[i].length; j++) {
      if ( dead.includes(allDeads[i][j]) ) {
        eachPerson.push(allDeads[i][j]);
      }
    }

    arrRes.push(eachPerson);
  }

  return arrRes.sort((a,b) => b.length - a.length)[0][0];
}

console.log( getKiller(person, dead) ); // James