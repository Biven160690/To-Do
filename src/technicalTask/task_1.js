const isArgsValid = function (fn) {
  return function (array, key) {
    if (Array.isArray(array) && array.length) {
      if (key) {
        if (array.some((obj) => Object.keys(obj).includes(key))) {
          return fn(array, key);
        } else {
          return {};
        }
      } else {
        throw new Error('Key is not provided');
      }
    } else {
      throw new Error('Array is not provided');
    }
  };
};

let groupBy = function (array, key) {
  const newObject = array.reduce(function (accum, curr) {
    accum[curr[key]] = accum[curr[key]] || [];
    accum[curr[key]].push(curr);
    return accum;
  }, {});
  return newObject;
};

// eslint-disable-next-line no-unused-vars
groupBy = isArgsValid(groupBy);
