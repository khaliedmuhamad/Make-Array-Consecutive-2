function makeArrayConsecutive2(statues) {
    let maxValue = Math.max(...statues),
        minValue = Math.min(...statues),  
        newArr = [];
  
  for(let i = minValue ; i <= maxValue ; ++i) {
    newArr.push(i);
  }
  console.log(maxValue)
  console.log(minValue)
  console.log(newArr)
  
    return Math.abs(statues.length - newArr.length);
}
console.log(makeArrayConsecutive2([1,5,4,6,8]))
