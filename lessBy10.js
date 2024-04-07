
// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.
function lessBy10(a, b, c){
    if(a - b >= 10) || (a - c >= 10) || (b - c >= 10){
      return true;
    }
    return false;
  }