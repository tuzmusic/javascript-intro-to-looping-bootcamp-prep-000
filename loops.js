function forLoop(array) {
  for (i=0; i<25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n) {
  while (n>0) {
    n--
    console.log(n)
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while array.length > 0
}
