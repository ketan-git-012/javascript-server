const createDimondShape = (n) => {
  var s = n - 1;
  for (var i = 1; i <= n; i++) {
    for (var c = 1; c <= s; c++) process.stdout.write(" ");

    s--;

    for (c = 1; c <= 2 * i - 1; c++) process.stdout.write("*");

    process.stdout.write("\n");
  }
  s = 1;

  for (i = 1; i <= n - 1; i++) {
    for (c = 1; c <= s; c++) process.stdout.write(" ");

    s++;

    for (c = 1; c <= 2 * (n - i) - 1; c++) process.stdout.write("*");

    process.stdout.write("\n");
  }
};

export default createDimondShape;
