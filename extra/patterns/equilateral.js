function displayPyramid(noOfRows) {
  for (var row = 0; row < noOfRows; row++) {
    var star = "";
    for (var column = 1; column < noOfRows - row; column++) {
      star = star + " ";
    }
    for (var vertical = 1; vertical <= 2 * row + 1; vertical++) {
      star = star + "*";
    }
    console.log(star);
  }
};
export default displayPyramid;
