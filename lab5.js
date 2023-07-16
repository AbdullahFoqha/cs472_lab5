// Function to find the maximum of two numbers
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Test case for max function
console.log(
  'Expected output of max(20, 10) is 20 and ' +
    myFunctionTest(20, function () {
      return max(20, 10);
    })
);

// Function to find the maximum of three numbers
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Test case for maxOfThree function
console.log(
  'Expected output of maxOfThree(5, 9, 3) is 9 and ' +
    myFunctionTest(9, function () {
      return maxOfThree(5, 9, 3);
    })
);

// Function to check if a character is a vowel
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}

// Test case for isVowel function
console.log(
  "Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function () {
      return isVowel('a');
    })
);

// Function to sum all numbers in an array
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Test case for sum function
console.log(
  'Expected output of sum([1, 2, 3, 4]) is 10 and ' +
    myFunctionTest(10, function () {
      return sum([1, 2, 3, 4]);
    })
);

// Function to multiply all numbers in an array
function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Test case for multiply function
console.log(
  'Expected output of multiply([1, 2, 3, 4]) is 24 and ' +
    myFunctionTest(24, function () {
      return multiply([1, 2, 3, 4]);
    })
);

// Function to reverse a string
function reverse(str) {
  return str.split('').reverse().join('');
}

// Test case for reverse function
console.log(
  "Expected output of reverse('jag testar') is 'ratset gaj' and " +
    myFunctionTest('ratset gaj', function () {
      return reverse('jag testar');
    })
);

// Function to find the length of the longest word in an array
function findLongestWord(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

// Test case for findLongestWord function
console.log(
  "Expected output of findLongestWord(['apple', 'banana', 'orange']) is 6 and " +
    myFunctionTest(6, function () {
      return findLongestWord(['apple', 'banana', 'orange']);
    })
);

// Function to filter words longer than a given length
function filterLongWords(words, length) {
  return words.filter((word) => word.length > length);
}

// Test case for filterLongWords function
console.log(
  "Expected output of filterLongWords(['apple', 'banana', 'orange'], 5) is ['banana', 'orange'] and " +
    myFunctionTest(['banana', 'orange'], function () {
      return filterLongWords(['apple', 'banana', 'orange'], 5);
    })
);

// Test function for comparing expected output with the actual output
function myFunctionTest(expected, func) {
  const result = func();
  if (expected === result) {
    return 'TEST SUCCEEDED';
  } else {
    return 'TEST FAILED';
  }
}
