function camelize(str){
var index = str.indexOf('-', 0)
let char1 =str.charAt(index+1).toUpperCase();
var array =string.split("-");
for (var i = 1; i < array.length; i++) {
	 let toReplace=array[i].charAt(0);
	 array[i]=	 array[i].replace(toReplace, toReplace.toUpperCase());
	 
};
let str2= array.join();
	while(str2.includes(",")){
		str2=str2.replace(',', '')
	}
	return str2;
}




let string = 'my-short-string';

let newString = camelize(string);
console.log(newString)