
//jshint esversion: 6

function chunkArrayInGroups(arr, size) {
  // Break it up.
 let newArr = [];
  for(let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, size + i));
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
