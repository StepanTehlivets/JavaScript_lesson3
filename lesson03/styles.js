var styles = ['Jazz', 'Blues'];

styles.push('Rock-n-roll');

console.log(styles);

function changeSemiLast(array){
	let index = array.length-2;
	array.splice(index,1, 'Classical');

	
}

changeSemiLast(styles);
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);

