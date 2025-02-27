// Loops
    // Repeats code without having to write it more than once
// Parts of a loop
    // index - position in the loop, number
    // iterator - determines what next
        // Decrement
            // i-- // descrease by i (goes down by 1)

            // i -= 2 // decrease by 2
        // Increment

            // i++ // increase by 1
            // i += 2 // increase by 2
    // The condition
        // let i = 2;
        // 2 < 9

//Types of Loops

// for Loops

// for ([starting point (index)]; [condition]; [iterator]) {
    // some code the executes for every step
// }

// count up to 10

// function countup (){
 // for (let i = 0; i <= 10; i++) {
   // console.log(i);
//  }
// }

// countup();

// count down from 10

   // for(let i = 10; i >= 1; i--) {
       // console.log(i);
   // }

// Get all the doubles from 1-10 example: (2,4,6,8,10 ...)

    // for(let i = 1; i <= 10; i++) {
      //  console.log(i * 2);
   // }

// Multiply every other num by 2 from 1-10 example: (1,2,6,8 ...)

   // for(let i = 1; i <= 10; i += 2) {
       // console.log(`At index ${i}, this is the double ${i * 2}`);
   // }

// Check if i is even or odd, 0-10
    // % - modulo , returns a remainder

   // for(let i = 0; i <= 10; i++) {
       // console.log("this is the index", i)
      //  if (i == 0) {
       //   console.log("I am 0");
       // } else if( i%2 == 0){
       //     console.log("even")
      //  }
      //  else {
     //       console.log("odd")
      //  }
  //  }


// while loops
    // let i = [starting point / starting condition]

    // while ([condition - when the condition is false is when the while loop will stop]) {
        // code you want execute
    // }

// Example 1: from 0 to 3 print are we there yet
    let count = 0;
    
    while (count < 3) {
        console.log("Are we there yet?");
        count ++;
    };

// Example 2: print " Looping Thru" for as long as the value is greater than 3
    let value = 13;

    while (value > 3) {
        console.log("Looping thru!");
        value --
    }















// do while loops