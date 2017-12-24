require('colors');




//________________________
// customers is a arry of time needed to checkout, n is the number of checkouts avaiable. Find the time taken in que
// function queueTime(customers, n) {
//
// if(customers.length === 0){return 0}
// if(n === 1){return customers.reduce((a, b) => a + b, 0);}
// //__________________
//       let result = 0
//       //sets up the checkout array
//       let checkouts = []
//       for (var i = 0; i < n; i++) {checkouts.push(0)}
//       console.log("customers".yellow,customers);
// //__________________
//       let time = 1
//       //as everything is in intervals of 1 min count down by that
//       while ( time !== 0 ) {
//         time--;
//         console.log(`${time}`.blue);
//
//         result++ ;
//         customers.forEach( (cus,index) => {//checks if the register is free
//           console.log("customer: ", cus);
//           let temp = 0
//           for (let i = 0; i < checkouts.length; i++) {
//             if (checkouts[i] === 0 && cus>time) {
//               checkouts[i] += cus;//add customer to register
//               temp ++//remove cus from line
//               time = cus;
//               break;
//             }
//             else if (checkouts[i] === 0) {
//               checkouts[i] += cus;
//               temp ++
//               break;
//             }
//             else{}
//           }//for loop
//
//           customers = customers.slice(temp)// remove
//           console.log("customers".yellow,customers);
//           console.log("checkouts".yellow,checkouts);
//           console.log("__________________________regi loop".yellow);
//         } ) //customers.forEach
//
//         for(let j=0; j<checkouts.length; j++){ checkouts[j]=checkouts[j]-1 }
//
//
//         console.log("result ".red,result);
//         console.log("checkouts".green,checkouts);
//         console.log("time ".green,time);
//         console.log("customers.length ".green,customers.length);
//         console.log("__________________________while loop".red);
//       }//while t!=0
//
//
//       console.log('final result', result);
//       return result-1 // removes the starting value on time.
//       // store a number per n
//       // add  next number to result and
//       // minus that number on all stored numbers.
//       // if that stored is below zero add next number too it.
//       // else -1 from each stored number and add to result until number is 0
// }
// // Test.assertEquals(queueTime([], 1), 0);
// // Test.assertEquals(queueTime([1,2,3,4], 1), 10);
// // Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
// // Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);
//
//
// /*queueTime([2,3,10], 2)=== 12&& */  queueTime([2,2,3,3,4,4], 2) === 9? console.log(true):console.log(false);
// /// best version
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }
//________________________
// // reverse words that are 5 or more characters in length in a sentence
// function spinWords(string){
//     result = ""
//     string.split(" ").forEach(function (i) {
//       i.length>5? result+= ` ${i.split("").reverse().join("")}`:result+= ` ${i}`
//     })
//     return result.trim()
// }
//
//
// spinWords("Hey fellow warriors") === "Hey wollef sroirraw"?console.log("yes"):console.log("nope");
//________________________
// find the largest block of 5 digits from a series of numbers
// function solution(digits){
//   result = 00000
//   let array= String(digits).split("")
//   for(let i = 5; i < array.length+1; i++) {
//     valueToBeat = result
//     currentValue = parseInt(array.slice(i-5,i).join(""))
//      if (valueToBeat<currentValue) {
//        result = currentValue
//      }
//   }
//   return result
// }
//
// solution(1234567890)===67890?console.log("true"):console.log("nope");


//________________________
// const changeTextOnGreaterthanOneCharacterCW = () => {
//   function wars(text){
//     var array = text.split("")
//     array.sort();
//     result = ""
//     array.forEach(function (i, index) {
//       if (array[index-1] === array[index] || index === 0) {
//         result+= i
//       }
//       return result
//     })
//   }
//
//   wars("Success")
//
//
//   //test
//   var x, y
//   x = "Success"
//   y = ")())())"
//
//   if (wars(x) === wars(y) ){
//       console.log("it worked");
//       return true
//   }else{
//       console.log("failed");
//       return false
//   }
//
// }
//
// const CW_2 = () => {    // take a start number and end and count all numbers unless they contain a 5 in the numbering
//   const dontGiveMeFive = (start, end) => {
//       var x = 0
//       for(var i = start; i < end+1; i++) {
//         if ( i.toString().search(5) === -1) {
//           x+= 1
//           // console.log(i);
//         }
//       }
//       return x;
//     };
//
//     // console.log(dontGiveMeFive(4, 17));
//
//     //test
//     var x, y
//     x = dontGiveMeFive(4,17)
//     y = 12
//
//     if (x === y ){
//         console.log("it worked");
//         return true
//     }else{
//         console.log("failed");
//         return false
//     }
// }
//
// const CW_3 = () => {
//   //takes numbers splits them and then adds
//   function digital_root_fail(n) {
//     result = 0
//     n.toString().split("").forEach(function (i) {
//
//       if (typeof(parseInt(i)) === 'number') {
//         console.log(parseInt(i));
//         result+= parseInt(i)
//       }
//     })
//     return result
//   }
//   function digital_root(n) {
//     if (n < 10)
//       return n;
//
//     for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//       sum += Number(n[i]);
//
//     return digital_root(sum);
//   }
//
//   //test
//   // console.log(digital_root(17) === 8);
//   }
//
//
// // return an array of all the  integer's divisors(except for 1 and the number itself).
// // if its prime return "13 is prime" (or whatever number it is)
//
// function divisors(integer) {
//   //check for prime  number
//   array = []
//   for (var i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       array.push(i)
//     };
//   }
//   if (integer !== 1 && array.length === 0) {
//     return `${integer} is prime`
//   };
//   return array
// };
//
// console.log(divisors(13), divisors(25) === [5]);
