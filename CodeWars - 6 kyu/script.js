'use strict';

// If function

function _if(bool, func1, func2) {
  if (bool) {
    return func1();
  } else {
    return func2();
  }
}

_if(true, () => 'True', () => 'False') // 'True'
_if(false, () => 'True', () => 'False') // 'False'