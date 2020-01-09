//Remove repeated array elements:

// let intitalArray = [4, 4, 4, 1, 2, 2, 3, 3, 3, 5, 5, 5, 5, 8,8,8,8,8,8,8,8,8];
// sortedArray = intitalArray.sort(function(a,b){return a-b});
// console.log(sortedArray);
// newArray = [];

// function uniqueArrayElements(sortedArray){
	// for(var i=0; i<sortedArray.length; i++){
	// if(newArray.indexOf(intitalArray[i]) == -1){
		// newArray.push(intitalArray[i]);
	// }
// }
	// return newArray;
// }

// console.log(uniqueArrayElements(sortedArray));






// //Sort by Highest Repeated Array

// let intitalArray = [4, 4, 4, 1, 2, 2, 3, 3, 3, 5, 5, 5, 5, 8,8,8,8,8,8,8,8,8];
// ascendArray = intitalArray.sort(function(a,b){ return a-b });
// count = {}
// ascendArray.forEach((x) => {
  // if(count[x]){
    // count[x] = count[x] + 1;
  // } else{
    // count[x] = 1;
  // }
// });

// countLength = Object.keys(count).length;

// let sortableArray = [];
// for(var key in count){
  // sortableArray.push([key,count[key]]);
// };

// sortableArray = sortableArray.sort((a,b) => b[1] - a[1])

// let finalArray = sortableArray.reduce((acc,ele) => [...acc,parseInt(ele[0])],[]);

// console.log(finalArray);






// // largest string in array

// iArray = [1,2,8,7,6,5,4,3,2,1];
// iArrayString = ["raju", "karri", "matha", "pradeep"]

// largest = "";

// iArrayString.forEach(ia => {
//   if(ia.length > largest.length){
//     largest = ia;
//   }
// });

// console.log(largest);






// //Print the differance in arrays

// a1 = [1,2,3,4];
// a2 = [1,2,3,4,5,6]

// diffArray = [];

// for(var i=0; i<a2.length; i++){
	// if(a1.indexOf(a2[i]) == -1){
		// diffArray.push(a2[i]);
	// }
// }

// console.log(diffArray);






// fibno series

outputArray = [0,1,1,2,3,5,8,13,21]

function fib(x){
	fib = [0,1];
	for(var i=2; i<x; i++){
		fib.push(fib[i-2] + fib[i-1]);
	}
	return fib;
}

console.log(fib(10));






























