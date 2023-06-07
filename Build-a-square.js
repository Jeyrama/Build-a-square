/*
I will give you an integer. 
Give me back a shape that is as long and wide as the integer. 
The integer will be a whole number between 1 and 50.

Example:
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++
*/


// Solution

function generateShape(n) {
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

// or

function generateShape(int) {
  let ans='';
  for (let i=0; i<int; ++i) {
    for (let j=0; j<int; ++j)
      ans+="+";
    if (i!=int-1)
      ans+="\n";
  }
  return ans;
}