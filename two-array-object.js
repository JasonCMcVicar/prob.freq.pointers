"use strict";

/** Return obj with key-value pairs from two different arrays
 *  based on shared index. Ignored extra values, if extra keys,
 *  set value to null.
*/

function twoArrayObject(keys, values) {
  const keysToValues = {};

  for (let i = 0; i < keys.length; i++) {
    if (values.length <= i) {
      keysToValues[keys[i]] = null;
    } else {
      keysToValues[keys[i]] = values[i];
    }
  }
  return keysToValues;
}
