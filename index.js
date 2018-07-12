function findMinAndRemove(array){
  let min = array[0];
  let minIdx = 0;
  for (let i=0; i<array.length; i++) {
<<<<<<< HEAD
    if (array[i] < min) {
=======
    if (array[i] < array[0]) {
>>>>>>> b862c6bb444545dd13c2a2502038faf9558504ec
      min = array[i];
      minIdx = i;
    }
  }
<<<<<<< HEAD
  array.splice(minIdx, 1);
=======
  array.splice(minIndex, 1);
>>>>>>> b862c6bb444545dd13c2a2502038faf9558504ec
  return min;
}

function insertionSort(array){
    let min;
    let sorted = []
    while(array.length != 0) {
      min = findMinAndRemove(array)
      sorted.push(min)
    }
    return sorted;
  }
