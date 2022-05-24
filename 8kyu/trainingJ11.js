// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:
function grabDoll(dolls){
  var bag=[];
  //coding here
  for(var i = 0; i < dolls.length; i++){
    
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else
      continue;
    
    if(bag.length === 3) break;
  }
  return bag;
}