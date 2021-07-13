function flattenArr(arr) {
  let result = [];
  arr.map(function(el){
    if (Array.isArray(el)) {
      result = result.concat(flattenArr(el))
    }
    else {
      result.push(el)
    }
  })
  return result;
}
let output = flattenArr([[2,[[3]]],4,[[5]]]);
console.log(output);
