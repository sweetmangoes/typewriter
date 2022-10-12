const sentence = "hello there from lighthouse labs";

let initialTime = 0; 

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + "\n");
  }, initialTime)
  initialTime = initialTime + 100; 
};




// setTimeout(() => {
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.