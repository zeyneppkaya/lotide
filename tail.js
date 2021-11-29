const tail = function(argument) {
  let arr = [];
  if (argument.length > 1) {
    for (let i = 1; i < argument.length; i++) {
      arr.push(argument[i]);
    }
  }
  return arr;
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words))
//assertEqual(tail(words), "Lighthouse Labs");
//assertEqual(words.length, 3);

module.exports = tail;