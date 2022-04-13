'use strict';

// Top Secret

function makeSecret(secret, password) {
  let currentSecret = secret;
  let currentPassword = password;
  let numberOfMistakes = 0;

  const storage = () => 'Absolutely not a secret thing';

  storage.getSecret = (initialPassword) => {
    if (numberOfMistakes === 3) {
      return null;
    }

    if (initialPassword === currentPassword) {
      numberOfMistakes = 0;

      return currentSecret;
    }

    numberOfMistakes++;

    return 'Wrong password!';
  };

  storage.setSecret = (newSecret, newPassword) => {
    currentSecret = newSecret;
    currentPassword = newPassword;
    numberOfMistakes = 0;
  };

  return storage;
}