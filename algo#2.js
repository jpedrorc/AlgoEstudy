integersArray = [1, 2, 3, 4, 5];

let newArray = [];

function multiArray(element, index, array) {
  let resultProd = 1;
  for (let i = 0; i < array.length; i++) {
    if (i != index) {
      resultProd = resultProd * array[i];
    }
  }
  newArray.push(resultProd);
  console.log(newArray);
}

integersArray.forEach(multiArray);

/*This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?*/
