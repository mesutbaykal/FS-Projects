const a = [12, 14, 16];
const b = [17, 13, 11];
let merge = [];
function mergeArrays(a, b) {
  merge.push(...a);
  merge.push(...b);
  merge.sort();
}
mergeArrays(a, b);
console.log(merge);
