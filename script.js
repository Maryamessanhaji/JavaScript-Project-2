// String Manipulation Functions:
function reversesString(str) {
    let reverses = '';
    for (let index = str.length - 1; index >= 0; index--) {
        reverses += str[index];
        return reverses;
    }
}

function countCharacters(str) {
    let len;
    len = str.length
   return len ;
    
}
function capitalizeWords(sentence) {
    let result = "";
    let capitalizeNext = true;
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
  
      if (capitalizeNext && char >= 'a' && char <= 'z') {
        // Convert lowercase letter to uppercase
        char = String.fromCharCode(char.charCodeAt(0) - 32);
        capitalizeNext = false;
      } else if (char === " ") {
        capitalizeNext = true;
      } else {
        capitalizeNext = false;
      }
  
      result += char;
    }
  
    return result;
  }

  
// Array Functions:
function findMaxMin(arr) {
    let max = arr[0]; 
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }else if (arr[i] < min) {
        min = arr[i];
      }
    }
    return [max,min];
  }

  function Sum(arr){
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        sum+=  arr[i]
       
    }
    return sum
  }
  
  function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
//   Mathematical Functions:
 
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  function isPrime(n) {
    if (n <= 1){
        return false; // 0 and 1 are not prime
    } 
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  
  function generateFibonacci(n) {
  let fib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  return fib;
}

  
  