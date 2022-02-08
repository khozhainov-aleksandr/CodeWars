'use strict';

// Add full name

function addFullName(user) {
    user.fullName = `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'Ivan',
    lastName: 'Vasylchenko',
};

addFullName(user);

console.log(user);