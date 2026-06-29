const name = "vishal"
const repoCount = 20

console.log(name + repoCount + " Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this is the another type or styring means hmm ise 7no pr jo code hai waise bhi likh skte hai 1&2 ki jagah 


const gameName = new String('vishal-pc') // agr ye chrome console me open krte hai to ye pura name expand krdeta hai 

 console.log(gameName[0]); // iska mtlb hai ki o pr konsa value aayefa example v
console.log(gameName.__proto__);


 console.log(gameName.length);// length use for like how many words in your name etc like vishal me 6
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// ye use hota hai character kis position pr hai uske liye hai example 2 pos pr S hai 
console.log(gameName.indexOf('t')); // ye bhi same hai isme no pata krte hai ki s konse no pr hai 

const newString = gameName.substring(0, 4) // iska mtlb hai ki koi bhi word aage se start hoga EX VISH
console.log(newString);

const anotherString = gameName.slice(-8, 4) // slice ka mtlb hai ki wo koibhi obj reverse se start karega EX                
console.log(anotherString);

const newStringOne = "   vishal  "
console.log(newStringOne);
console.log(newStringOne.trim()); // they remoive space 

const url = "https://vishal.com/vishal%20yadav"

console.log(url.replace('%20', '-')) // ye20% ko _ me convert krta 

console.log(url.includes('yadaw')) // ye use hota hai ki ye word hai hai ki nhi means jo word likha hai wo use huwa hai ki nhi 

console.log(gameName.split('-')); // ye koi bhi chheez ko split krdeta hai 