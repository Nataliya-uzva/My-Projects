var arr1 = ['a', 'b', 'c'];
var arr2 = ['D', 'E', 'F'];
var arr3 = [1, 2, 3];
var arr = [arr1, arr2, arr3];
for (var i = 0; i< arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		console.log (arr[i][j]);
	}
}