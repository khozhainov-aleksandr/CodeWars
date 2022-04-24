'use strict';

// truncateMethod

function truncateMethod() {
  String.prototype.truncate = function(options = {}) {
    const {
      length = 30,
      omission = '...',
      separator = '',
    } = options;

    if (length >= this.length) {
      return this;
    }

    const maxLength = length - omission.length;
    const parts = this.split(separator);
    let result = '';

    for (let i = 0; i < parts.length; i++) {
      const newResult = parts.slice(0, i + 1).join(separator);

      if (newResult.length > maxLength) {
        return result + omission;
      }

      result = newResult;
    }
  };
}