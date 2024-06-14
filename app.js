// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
//239

function arraySum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = "Harry Potter and the Goblet of Fire";
book.numPages = 600;
book.readCount = 1;
book.info = function () {
    return '${this.title} by J.K. Rowling, ${this.numPages}, read ${this.readCount} time';
}

console.log(book.info());

//Exc 3
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

//Convert the string sentence into an array
console.log(sentence.split(" "));
const words = sentence.split(" ");

for(let i = 0; i < words.length; i++) {
    //convert the individual word into an array
    const letters = words[i].split("");
    console.log(letters);
    //Use the built in ray reverse method to swap the order of the letters
    letters.reverse();
    console.log(letters);
    //Update the word array as we go
    words[i] =letters.join("");
}

console.log(words);
//Join the array back together in one string
const result = words.join(" ");
console.log(result);

//Exc 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

//Make an array to hold all the finalized objects
const resultArray = [];

const rows = csvData.split("\n");
console.log(rows);
const headers = rows[0].split(",");
console.log(headers);

//Itterate over the rest of the rows
for (let i = 1; i < rows.length; i++) {
    //Split each row on the comma
    const values = rows[i].split(",");
    console.log(values);
    //Create an object to hold these values
    const temporaryObj = {
        name: values[0],
        age: values[1]
    };
    //Add the objects to the end of the array
    resultArray.push(temporaryObj);
}

console.log(resultArray);


