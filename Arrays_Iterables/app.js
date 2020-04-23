const numbers = [1, 2, 3]; //most common way
console.log(numbers);

// //const moreNumbers = new Array('hi', 'there'); // []
// const moreNumbers = new Array(3);//will produce empty*3//(1, 5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const listItemsArray = Array.from(listItems);
console.log(listItemsArray);

const moreNumbers = Array.from('hiii'); //convert iterable and array like to an array
console.log(moreNumbers);