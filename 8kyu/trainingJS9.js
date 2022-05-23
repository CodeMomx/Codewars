// If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
    str = str + "*";
  }else{
    str = "*" + str;
  }
  n --;
  }
  re