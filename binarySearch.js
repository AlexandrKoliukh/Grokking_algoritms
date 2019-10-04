const array = [...new Array(100).keys()];

console.log(array);

const binarySearch = (coll, item) => {
  let low = 0;
  let height = coll.length - 1;

  while (low <= height) {
    const mid = Math.floor((low + height) / 2);
    console.count();
    if (mid === item) return mid;
    if (mid > item) {
      height = mid;
    } else {
      low = mid + 1;
    }
  }

  return undefined;
};

console.log(binarySearch(array, 100));
