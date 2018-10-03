function forLoop(array) {
  for (var i=0; i<24; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    console.log(array)
    return array
  }
}
