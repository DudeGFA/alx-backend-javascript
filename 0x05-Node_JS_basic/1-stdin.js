console.log("Welcome to Holberton School, what is your name?")
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    console.log("Your name is: " + input);
  }
});
process.on('SIGINT', function(code) {
console.log('This important software is now closing');
process.exit()
});
