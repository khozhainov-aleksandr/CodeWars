'use strict';

// Omit method

function omitMethod() {
  /**
   * @param {string[]} keys
   *
   * @returns {Object}
   */
  Object.prototype.omit = function omit(keys) {
    const newObj = Object.assign({}, this);

    for (const key in newObj) {
      keys.forEach(element => {
        if (key === element) {
          delete newObj[key];
        }
      });
    }

    return newObj;
  };
}