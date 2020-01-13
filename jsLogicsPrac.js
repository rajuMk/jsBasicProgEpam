<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>

<script>

	//compare 2 arrays and give the differance
	
	<!-- arr1 = [1,2,3,4,5]; -->
	<!-- arr2 = [1,2,3,4,5,6,7]; -->
	<!-- arrLength = arr2.length; -->
	<!-- for(var i=0; i<arrLength; i++){ -->
		<!-- if(arr1.indexOf(arr2[i]) == -1){ -->
			<!-- console.log(arr2[i]); -->
		<!-- } -->
	<!-- } -->
	
	
	
	
	
	
	//palendrome or not
	
	<!-- inputString = "Madam" -->
	
	<!-- function palendrome(inputString){ -->
	  <!-- lowerCaseInput = inputString.toLowerCase(); -->
	  <!-- arrayInput = lowerCaseInput.split(""); -->
	  <!-- if(lowerCaseInput.length%2 != 0){ -->
			<!-- console.log("odd"); -->
			<!-- for(var i=0; i<lowerCaseInput.length; i++){ -->
				<!-- if(arrayInput[i] == arrayInput[arrayInput.length-i]){ -->
					<!-- return  -->
				<!-- } -->
			<!-- } -->
	  <!-- } else{ -->
		<!-- console.log(even); -->
	  <!-- } -->
	
	<!-- } -->
	
	<!-- palendrome(inputString); -->
	
	
	
	
	
	
	//prime number below 100 wrong approch
	
	<!-- function primeNum(inputNumber){ -->
	  <!-- primeArray = []; -->
	  <!-- npnPrimeArray = []; -->
		<!-- for(var i=12; i<=inputNumber; i++){ -->
			<!-- if(i%2 ==0 || i%3 == 0 || i%5 == 0 || i%7 == 0){ -->
				<!-- npnPrimeArray.push(i); -->
			<!-- } else{ -->
				<!-- primeArray.push(i);	 -->
			<!-- } -->
		<!-- } -->
		<!-- return primeArray; -->
	<!-- } -->
	
	<!-- console.log(primeNum(100)); -->
	
	
	
	//prime number below 100
	
	<!-- function isPrime(num) { -->
    <!-- for ( var i = 2; i < num; i++ ) { -->
        <!-- if ( num % i === 0 ) { -->
            <!-- return false; -->
        <!-- } -->
    <!-- } -->
    <!-- return true; -->
	<!-- } -->

	<!-- function display(n) { -->
		<!-- var arr = [2]; -->
		<!-- for ( var i = 3; i < n; i+=2 ) { -->
			<!-- if ( isPrime(i) ) { -->
				<!-- arr.push(i); -->
			<!-- } -->
		<!-- } -->
		<!-- console.log(arr); // use arr result on your own -->
	<!-- } -->

	<!-- display(100); -->
	
	
	
	function isPrime(n){
		for(var i=2; i<n; i++){
			if(n%i == 0){
				return false;
			}
		}
		return true;
	}
	
	function primeNumbers(n){
		primeArray = [];
		if(isPrime(n)){
			
		}
	}

	
	//is given number prime
	
	<!-- function primeNum(n){ -->
		<!-- let isPrime; -->
		<!-- for(var i=2; i<n-1; i++){ -->
			<!-- if(n%i == 0){ -->
				<!-- isPrime = false; -->
				<!-- break; -->
			<!-- } else{ -->
				<!-- isPrime = true; -->
			<!-- } -->
		<!-- } -->
		<!-- return isPrime; -->
	<!-- } -->
	
	<!-- console.log(primeNum(3)); -->
	
	
	
	
	
	
	
	//Remove adjcent duplicate characters from string
	
	
	
	
	
	
  // largest string in array

 <!-- iArray = [1,2,8,7,6,5,4,3,2,1]; -->
 <!-- iArrayString = ["raju", "karri", "matha", "pradeep"] -->

 <!-- largest = ""; -->

 <!-- iArrayString.forEach(ia => { -->
   <!-- if(ia.length > largest.length){ -->
     <!-- largest = ia; -->
   <!-- } -->
 <!-- }); -->

 <!-- console.log(largest); -->
	
	



	
	
	//ascending the array and find the 2nd largest element in an array using while
	
	<!-- arr1 = [12,15,11,8,9,6]; -->
	<!-- arr1.sort(function(a,b){ -->
		<!-- return a-b; -->
	<!-- }) -->
	<!-- console.log(arr1[1]); -->
	
	
	
	<!-- function bubbleSort(inputArray){ -->
		<!-- arrLength = inputArray.length; -->
		<!-- var done = true; -->
		<!-- while(done){ -->
			<!-- done = false; -->
			<!-- for(var i=0; i<arrLength; i++){ -->
			<!-- if(inputArray[i] < inputArray[i+1]){ -->
				<!-- done = true; -->
				<!-- var tem = inputArray[i]; -->
				<!-- inputArray[i] = inputArray[i+1]; -->
				<!-- inputArray[i+1] = tem; -->
			<!-- } -->
		  <!-- } -->
		<!-- } -->
		<!-- return inputArray; -->
	<!-- } -->
	
	<!-- inputArray = [10, 15, 26, 75, 1, 6]; -->
	<!-- console.log(bubbleSort(inputArray)); -->
	
	
	
	
	
	
	
	//ascending the array and find the 2nd largest element in an array without using while loop
	
	<!-- function bubbleSort(inputArray){ -->
		<!-- for(var i = 0; i<inputArray.length-1; i++){ -->
			<!-- for(var j=0; j<inputArray.length; j++){ -->
				<!-- if(inputArray[j] > inputArray[j+1]){ -->
					<!-- var temp = inputArray[j+1]; -->
					<!-- inputArray[j+1] = inputArray[j]; -->
					<!-- inputArray[j] = temp; -->
				<!-- } -->
			<!-- } -->
		<!-- } -->
		<!-- return inputArray; -->
	<!-- } -->
	
	<!-- inputArray = [10, 15, 26, 75, 5, 6]; -->
	<!-- console.log(bubbleSort(inputArray)); -->
	
		
		
	
	
	
	
 //Sort by Highest Repeated Array

 <!-- let intitalArray = [4, 4, 4, 1, 2, 2, 3, 3, 3, 5, 5, 5, 5, 8,8,8,8,8,8,8,8,8]; -->
 <!-- ascendArray = intitalArray.sort(function(a,b){ return a-b }); -->
 <!-- count = {} -->
 <!-- ascendArray.forEach((x) => { -->
   <!-- if(count[x]){ -->
     <!-- count[x] = count[x] + 1; -->
   <!-- } else{ -->
     <!-- count[x] = 1; -->
   <!-- } -->
 <!-- }); -->

 <!-- countLength = Object.keys(count).length; -->

 <!-- let sortableArray = []; -->
 <!-- for(var key in count){ -->
   <!-- sortableArray.push([key,count[key]]); -->
 <!-- }; -->

 <!-- sortableArray = sortableArray.sort((a,b) => b[1] - a[1]) -->

 <!-- let finalArray = sortableArray.reduce((acc,ele) => [...acc,parseInt(ele[0])],[]); -->

 <!-- console.log(finalArray); -->


	
	
	
	
	
	
	
	
	
	
	
</script>
</html>
