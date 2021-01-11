function filterRange(array, a,b){
	array.length=b;
	var array1 = array.slice(a);
	
	return array1;
}

var arr= [1,2,3,4,5,6,7,8,9];

var arr1= filterRange(arr, 3,6);

console.log(arr1);
