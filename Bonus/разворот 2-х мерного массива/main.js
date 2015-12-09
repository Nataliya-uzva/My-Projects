var arr1 = [10, 20, 30];
var arr2 = ['abc', 'def', 'ghi', 'jkl', 'mno'];
var arr3 = [100, 200, 300];
var arr = [arr1, arr2, arr3];
var arr4 =[[],[],[]];
for (var i = 0; i<arr.length; i++){
	for (var j = 0; j<arr[i].length; j++){
		arr4[i][j]=arr[arr.length-1-i][arr[i].length-1-j];
		console.log (arr4[i][j]);
	}
}