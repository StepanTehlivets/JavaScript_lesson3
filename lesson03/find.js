function find(array, value){
	var index = array.indexOf(value);
	return index;
}
var arr = ['Mars', 'Snickers', 'Twix', 'Bounty'];

console.log(find(arr, 'Twix'));
console.log(find(arr, 'KitKat'));
