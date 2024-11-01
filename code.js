console.log("*************************************************************************************************")
console.log("Part 1: Thinking Functionally.")
console.log("*************************************************************************************************")
console.log("\n")
console.log("1. Take an array of numbers and return the sum. ")
console.log("----------------------------------------------------------------------------------------------------")

let num = [1, 2, 3, 4, 5]
let result = 0

function sumofarr(num) {
    result = result + num
    return result
}

num.forEach(sumofarr)
console.log("Sum of arrays", result)
console.log("\n")
//console.log("---------------------------------------------------------------------------------------------------------------------*****")
console.log("2.Take an array of numbers and return the average.")
console.log("---------------------------------------------------------------------------------------------------------------------******")

let len = num.length
console.log("Average of the numbers", result / len)

console.log("\n")
console.log("3.Take an array of strings and return the longest string.")
console.log("---------------------------------------------------------------------------------------------------------------------******")

const strings = ["say", "hello", "in", "the", "morning"];
let longeststring = ""

function findlongeststr(str) {
    if (str.length > longeststring.length) {
        longeststring = str;
    }
}
strings.forEach(findlongeststr)
console.log("Logest string is ",longeststring)

console.log("\n")
console.log("4.Take an array of strings, and a number and return an array of the strings that are longer than the given number. . ")
console.log("---------------------------------------------------------------------------------------------------------------------******")
const strings2 = ["say", "hello", "in", "the", "morning"];
let lenchk = 4
const longeststrings = [];
let finaloutput = ''
//const longeststrings=[]
function findlongeststrings(str, lenval) {
    str.forEach(function (str) {
        if (str.length > lenval) {
            longeststrings.push(str)
           // console.log(longeststrings)
        }
    });
   // console.log(longeststrings)
    return longeststrings
}
finaloutput = findlongeststrings(strings2, lenchk)
console.log(`Array of strings that are longer than ${lenchk} is :`,longeststrings)


console.log("\n")
console.log("5.Take a number, n, and print every number between 1 and n without using loops. Use recursion.. ")
console.log("---------------------------------------------------------------------------------------------------------------------******")

const num5=19;
function printnum(num)
{
    console.log(num)
}

for (let i=1;i<=num5;i++)
{
printnum(i)
}
console.log("*************************************************************************************************")
console.log("Part 2: Thinking Methodically.")
console.log("*************************************************************************************************")

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
// const data = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// ];

const finaldata = []
//console.log(data.length)
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            //console.log(i,j,j+1,arr[j]["age"],arr[j+1]["age"])
            if (parseInt(arr[j]["age"]) > parseInt(arr[j + 1]["age"])) {
                 let temp = arr[j];
                 arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
         //   console.log(arr)
        }
    }
    return arr;
}
console.log(sortArray(data));

// 2. Filter the array to remove entries with an age greater than 50
const filterByAge = data.filter(person => person.age <= 50);
console.log("Filtered the array by removing entries with an age greater than 50", filterByAge);

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1

data.forEach(val => 
    { 
        val.job = val.occupation; 
        delete val.occupation; 
        val.age = parseInt(val.age) + 1;
     
     });

console.log("Mapped data:", data);

// 4. Use the reduce method to calculate the sum of the ages
const totalAge = data.reduce((ressumofeacharr, data) => ressumofeacharr + parseInt(data.age), 0);
console.log("Total age:", totalAge);

// 5. Calculate the average age
const averageAge = totalAge / data.length;
console.log("Average age:", averageAge);

console.log("*************************************************************************************************")
console.log("Part 3: Thinking Critically.")
console.log("*************************************************************************************************")

function incrementage(data)
{
 if (!data.age)
 {
    data.age=0;
 }
 data.age +=1;
 data.updated_at=new Date();
 return data;
}

data.forEach(incrementage)
console.log(data)

