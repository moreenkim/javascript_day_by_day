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

// const testResults = [1, 5.2, -6.2, 10, 15];
// //const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(7);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(5.2));
// //console.log(testResults.lastIndexOf(5.2));  //start searching from the right of the array
// console.log(testResults.includes(5.2));

// const personData = [{name:'max'}, {name:'manuel'}];
// console.log(personData.indexOf({name:'max'}));

// const manuel = personData.find((person, index, persons) => {
//     return person.name === 'manuel';
// });
// console.log(manuel);

// const maxIndex = personData.findIndex((person, index, persons) => {
//     return person.name === 'max';
// });
// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for(const price of prices){
// //     taxAdjustedPrices.push(price * (1+tax));
// // }

// prices.forEach((price, idx, prices) => { //an alternative for for-of loops
//     const priceObject = {index: idx, taxAdjustedPrice: price * (1+tax)}
//     taxAdjustedPrices.push(priceObject);
// })
// console.log(taxAdjustedPrices);


const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;


const taxAdjustedPrices = prices.map((price, idx, prices) => { //an alternative for for-of loops
    const priceObject = {index: idx, taxAdjustedPrice: price * (1+tax)}
    return priceObject;
});
//console.log(prices,taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => { //.sort gets from lowest to highest
    if (a > b){
        return 1;
    } else if (a === b){
        return 0;
    }else{
        return -1;
    }
});
//console.log(sortedPrices.reverse()); //gets from highest to lowest
console.log(sortedPrices);

const filteredArray = prices.filter((price, idx, prices) => {
     return price > 6;
});
console.log(filteredArray);
  

// // let sum = 0;
// // prices.forEach((prices) => {
// //     sum += prices
// // });

// console.log(sum);

const sum = prices.reduce((prev, curr, curidx, prices) => {
    return prev + curr;
}, 0);

console.log(sum);

const data = 'newyork;10.99;2000';

const transformData = data.split(';');

console.log(transformData);

const nameFrsgments = ['max', 'trainer'];
const name = nameFrsgments.join(' ');
console.log(name);