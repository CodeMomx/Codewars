// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:
function pickIt(arr){
 
  let odd = []
  let even =[]
  
  for (var x of arr) {
    ((x % 2) ? odd : even).push(x)
  }
  
  return [odd,even];
}