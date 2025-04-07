// //CONDITIONERS 
// let score = 50
// let grade 
// // let message 

// if (score > 70 && score <=100) {
//     grade = 'A'
//     message = `Congratulations!!! you passed and you got an ${grade}`
// } 
// else if(score >=60 && score <=69){
//     grade = 'B'
//     message = `Congratulations!!! you passed and you got an ${grade}`
// }
// else if(score >=50 && score <=59){
//     grade = "C"
//     message = `Congratulations!!! you passed and you got an ${grade}`
// }
// else if(score >=40 && score <=49){
//     grade = 'D'
//     message = `Opps!!! you Failed and you got an ${grade}`
// }
// else if(score >=30 && score <=39){
//     grade = 'E'
//     message = `Opps!!! you Failed and you got an ${grade}`
// }
// else if (score >=0 && score <=29){
//     grade = 'F'
//     message = `Sorry!!! you failed woofly and you got an ${grade}`
// }
// else {
//     grade = 'N/A'
//     message = 'Invalid score'
// }

// // console.log (grade)
// // console.log(message)

// // let username = 'Benjamin'
// // let password = 'myPassword'
// // if (username == `Benjamin` && password == `myPassword`){
// //     console.log('Login Successful')
// // } else { 
// //     // console.log ('Who the Fuck are you')
// // }

// let age = 17
// let access

// if(age >=18 && age <=60){
//     access = ('you are productive')
// }
// else if (age > 60){
//     access = ('you are suposed to be retired')
// }

// else {
//     access = ('you are not allowed, to young')
// }

// // console.log(access)

// for (let i=80; i<=100; i++){
//     // console.log('Iam blessed and I live in aboundance')
// }

// //We have an array of number, iterate through the array and sum all the number
// let numbers =[2,6,8,9,12,98,11]
// let result = 0
// for(i=0; i < numbers.length; i ++){
//     result += numbers[i]
//     // console.log(numbers[i])

// }

// //using integeger print all even and odd numbers


// //ASSIGNMENT 1
// let evenNumbers = []
// let oddNumbers = []
// let number=100
// for (let i=1; i<=100; i++){
//     if(i % 2 == 0){
//         evenNumbers.push(i)
        
//     }else{
//         oddNumbers.push(i)
//     }
// }

// // console.log(evenNumbers)
// // console.log(oddNumbers)


// //ASSIGNMENT 2
// let array = [2,4,6,8,10,12]
// for (let i=0; i <array.length; i++)
// {
//     array[i] = array[i] * 3
// }
// // console.log (array)




// //ASSIGMENT 3 FIND 10 FACTORIAL WITH LOOP 
// let num = 10 
// let facto = 1
// for (let i=num; i > 0; i--){
//     facto *= i
//     // console.log (`factorial of ${num} ${facto}`)
// }
// // console.log (`factorial of ${num} ${facto}`)

// //ANOTHER WAY 
// for(let i = 10; i>=1; i--)
//     // console.log(i)

// // //FIZZBUZZ 
// // //multiples of 3 print fizz
// // //multiples of 3 print buzz 
// // //multipes of 5 and 5 print fizzbuzz

// let Numbs = 100

// for (i = 1; i<= Numbs; i++ ) {

//     if ( i % 3 == 0 && 5 == 0){
//         // console.log (i,'Fizzbuzz')
//     } 

//     else if (i % 3 == 0){
//         // console.log(i, 'Fizz')
//     }

       
//     else if ( i % 5 == 0){
//         // console.log (i, 'Buzz')
//     } 
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0){
//         continue 

//     }
//     else {
//         console.log(i)
//     }
// }

//GRADING SYSTEM 
//100 - 90 - A
//80 - 89 - B
//70 - 79 - C
//60 - 69 - D
//BELOW 60 - F

// let gradescore = 100
// let grade 
// for (let gradescore = 0; gradescore <= 60; gradescore++)
//     {
//     if (gradescore <= 100 && gradescore >= 90){
//         grade = 'A' 
//         message = `congratulations you passed with an ${grade} `
//     }

//     else if (gradescore >= 80 && gradescore <= 89){
//         grade = 'B'
//         message = `congratulations you passed with a ${grade}`
//     }
       
//     else if (gradescore >= 70 && gradescore <=79){
//         grade = 'C'
//         message = `congratulation you passed with a ${grade}`
//     }

//     else if (gradescore >= 60 && gradescore <= 69){
//         grade = 'D'
//         message = `you can do better, you grade is ${grade}`
//     }

//     else if (gradescore < 60){
//         grade = 'F'
//         message = `you faied with an ${grade}`
//     }

//     else {
//         message = 'Not a student'
//     }

// }
// // console. log (message)


// //FIBONACCI SEQUENCE 
// let sequence = [0, 1]
// for(i = 2; i < 5; i++ ){
//     sequence[i] = sequence[i - 1] + sequence[i - 2]
// }

// // console.log(sequence)


// //ASSIGNING FUNCTIONS
// function num(n){
//     let evenNumbers = []
//     let oddNumbers = []
     
//     for(let i = 1; i <= n; i++){
//         if(i % 2 == 0){
//             evenNumbers.push(i)
//         }
//         else {
//             oddNumbers.push(i)
//         }
//     }    
// //     console.log (evenNumbers)
// //     console.log (oddNumbers)
// // }


// let max = 10
// num (max)



//ASSIGNMENT 1
// let findVowel = function(letter) {

//     var vowels = ["a", "e", "i", "o", "u"];

//     for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
//         if(letter === vowels[i]){// Use array indexing instead
//             return true;
//          }
//     }

//     return false;// This is after the loop

// let letters = "Benjamin";

// function findVowel(words) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     words = words.toLowerCase();
//     let vowelCount = 0;
    
//     for (let i = 0; i < words.length; i++) {
//         if (vowels.includes(words[i])) {
//             vowelCount++;
//         }
//     }
    
//     return vowelCount;
// }

// console.log(findVowel(32letters));

// //ASSIGNMENT 2
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function Mynumbers(n) {
//     let total = 0;
//     for (let i = 0; i < n.length; i++) {
//         total += n[i];
//     }
//     return total/n.length;
// }
// let Average = Mynumbers(numbers)
// // console.log(Average);


// //ASSIGNMENT 3

// function findMin(arr) {
//     let min = arr[0]; 
//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < min) { 
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let Numbs = [12, 87, 100, 89, 100, 98, 199, 76, 44];
// // console.log(findMin(Numbs));


//NESTED LOOPS
// let airplanes = [ 
//     ['777', 'myown', 'help me']
//     ['sunday', 'monday', 'tuesday']
// ];
//     for(let i=0; i < airplanes.length; i++){
//         let row = airplanes[i]; 
//         for (let j = 0; j < row.length; j++){
          
//         }
//         console.log (row[j]);
//     }

    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= 3; j++) {
            row += (i * j) + " ";
        }
        console.log(row);
    }



    // let board = [
    //     ["X", "O", " "],
    //     [" ", "X", "O"],
    //     ["O", " ", "X"]
    // ];

    // for(i = 0; i < board.length; i++){
    //     let row =""
    //     for(let j = 0; j < board[i].length; j++){
    //         row += board[i][j];
    //        if (j < board[i].length-1){
    //         row += " | "
    //        }
    //     }
    //     console.log(row)

    //     if(i < board.length){
    //         console.log ("- - - - -")
    //     }
    // }
