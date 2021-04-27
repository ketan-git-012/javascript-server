function createDimondShape(n) {
  var s=n-1;
for(var i=1;i<=n;i++)
{
     for (var c = 1;c<=s;c++)
      process.stdout.write(" ");

    s--;

     for(c=1;c<=2*i-1;c++)
         process.stdout.write("*");

     process.stdout.write("\n");
}
s=1;

for(i=1;i<=n-1;i++)
{
   for(c=1;c<=s;c++)
    process.stdout.write(" ");

    s++;

    for(c=1;c<=2*(n-i)-1;c++)
     process.stdout.write("*");

    process.stdout.write("\n");
}
}

for (i = 2; i < process.argv.length; i++) {
  if (process.argv[i] > 1 && process.argv[i] < 11) {
    createDimondShape(process.argv[i]);
  }
  else{
    process.stdout.write("Enter number between 2 to 10");
  }
}
