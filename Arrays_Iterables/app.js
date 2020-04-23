const numbers = [1, 2, 3]; //most common way
console.log(numbers);

// //const moreNumbers = new Array('hi', 'there'); // []
// const moreNumbers = new Array(3);//will produce empty*3//(1, 5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

/*const listItems = document.querySelectorAll('li'); //will cr8 nodelist
console.log(listItems);

const listItemsArray = Array.from(listItems); //will cr8 real array
console.log(listItemsArray);

const moreNumbers = Array.from('hiii'); //convert iterable and array like to an array
console.log(moreNumbers);

const hobbies = ['cooking', 'sports'];  //what can be stored in arrays
const personalData = [30, 'max', {moreData: []}];

const analytics = [[1, 1.5], [-5, 4.2]]; //multidimentional or nested arrays

for(const data of analytics) {
    for(const datapoint of data) {
        console.log(datapoint);
    }
}*/

// const hobbies = ['cooking', 'sports'];
// hobbies.push('reading'); //.push adds elements at END of the array
// hobbies.unshift('coding'); //.unshift addselements at BEGINNING of an array
// hobbies.pop(); //.pop removes element at END of array
// hobbies.shift(); //remove element at BEGINNING of array  
// console.log(hobbies);

// hobbies[1] = 'CODING' //change elements using index access
// console.log(hobbies);

// hobbies.splice(1, 0, 'good food'); //add element between elements in array
// console.log(hobbies);

// hobbies.splice(0, 1); //remove element from array
// console.log(hobbies);

const testResults = [1, 5.2, -6.2, 10, 15];
//const storedResults = testResults.slice(0, 2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(7);

console.log(storedResults, testResults);
console.log(testResults.indexOf(5.2));
//console.log(testResults.lastIndexOf(5.2));  //start searching from the right of the array

const personData = [{name:'max'}, {name:'anna'}];
console.log(personData.indexOf({name:'max'}));