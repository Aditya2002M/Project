/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggestEle = numbers[0];
    for (let i =0;i<numbers.length;i++){
        if(biggestEle < numbers[i]){
            biggestEle = numbers[i];
        }
    }
    return biggestEle;
}

module.exports = findLargestElement;