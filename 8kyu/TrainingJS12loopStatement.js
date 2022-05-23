// In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:
function giveMeFive(obj){
  var five = [];
  for(var key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5)five.push(obj[key]);
  }
  return five;
}