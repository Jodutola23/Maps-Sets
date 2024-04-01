//Quick Question 1
//new Set([1,1,2,2,3,4]) --- The code will return {1,2,3,4}

//Quick Question 2
//[...new Set("referee")].join("") --- The code will return "ref"

//Quick Question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
The code will return
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

//hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// hasDuplicate([1,3,2,1]) this will return true
// hasDuplicate([1,5,-1,4]) this will return false

// vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}