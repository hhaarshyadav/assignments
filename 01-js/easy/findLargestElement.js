/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans = 0;
    for(let i = 0;i<Input.length;i++){
        if(Input[i]>ans) ans = Input[i]
    }
    return ans;
}

module.exports = findLargestElement;
