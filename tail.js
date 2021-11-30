const tail = function(argument) {
  let array = [];
  if (argument.length > 1) {
    for (let i = 1; i < argument.length; i++) {
      array.push(argument[i]);
    }
  }
  return array;
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words))
//assertEqual(tail(words), "Lighthouse Labs");
//assertEqual(words.length, 3);

module.exports = tail;