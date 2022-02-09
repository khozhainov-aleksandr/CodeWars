'use strict';

// Restore names

function restoreNames(users) {
    for (let i = 0; i < users.length; i++) {
        const userName = users[i].fullName.split(' ')[0];
        users[i].firstName = userName;
    }
}

const users = [
    {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
    },
    {
        lastName: 'Adams',
        fullName: 'Mike Adams',
    },
];
  
restoreNames(users);

console.log(users);