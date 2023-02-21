function BubbleSort(array) {
    let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true
      }
    }
  } while (swapped);
}

const arr = [89, 45, 23, 4, 0, 1];
BubbleSort(arr);
console.log(arr);


//time complexity -> n^2
