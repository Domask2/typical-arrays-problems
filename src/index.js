
exports.min = function min (array) {
  if(array === undefined || !Array.isArray(array) || array[0] === undefined) return 0;
  let min = array[0];

  for(let i=0; i<array.length; i++) {

    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

exports.max = function max (array) {
  if(array === undefined || !Array.isArray(array) || array[0] === undefined) return 0;
  let max = array[0];

  for(let i=0; i<array.length; i++) {

    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

exports.avg = function avg (array) {
  if(array === undefined || !Array.isArray(array) || array[0] === undefined) return 0;
  let sum = 0;
  array.forEach(item=>{
    sum+=item;
  });
   return +(sum/array.length).toFixed(2);
};
