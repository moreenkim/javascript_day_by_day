const numbers = [1, 2, 3]; //most common way
console.log(numbers);

// //const moreNumbers = new Array('hi', 'there'); // []
// const moreNumbers = new Array(3);//will produce empty*3//(1, 5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li'); //will cr8 nodelist
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
}