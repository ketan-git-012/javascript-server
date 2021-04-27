function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}


for (i = 2; i < process.argv.length; i++) {
  if (process.argv[i] > 1 && process.argv[i] < 11) {
    displayPyramid(process.argv[i]);
  }
  else{
    process.stdout.write("Enter number between 2 to 10");
  }
}
