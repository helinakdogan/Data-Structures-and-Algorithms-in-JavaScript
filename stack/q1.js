// Q1: Is the number palindrome?

/* functions: 
push -> placing data onto a stack, adding one or more elements to the end of the array
pop -> removing top element of a stack, removing the element at the end of the array and returns the element to the caller. If the array is empty, the pop() method returns undefined.
peek -> displaying the top element of a stack
length -> determining how many elements are on a stack
*/

function checkPalindrome(word) {

    var letters = [];  // this is the stack

    // push letters of word into letters array
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    var reverseWord = "";

    // pop off the stack in reverse order
    for (var i = 0; i < word.length; i++) {
        reverseWord += letters.pop();
    }

    if (reverseWord === word) {
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
    }
}
console.log(checkPalindrome("racecar"));






