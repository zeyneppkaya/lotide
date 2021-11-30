const head = function(arg1, arg2) {
  if (arg1.length >= 1) {
    return arg1[0];
  } else if (arg1.length === 0) {
    return undefined;
  } else {
    return arg1;
  }
};

module.exports = head;
