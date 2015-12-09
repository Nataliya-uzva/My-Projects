function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
var arr=[[],[],[],[],[],[],[],[],[],[]];
var arr1=[[],[],[],[],[],[],[],[],[],[]];
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j< arr.length; j++) {
		arr[i][j]=randomInteger(0,100);
	console.log (arr[i][j]);
	}
}/*если использовать способ предложенный тобой, то я фактически не меняю массив, а просто
вывожу на console с конца. В этом случае можно просто обойтись имеющимся одним массивом.

for (var i =arr.length-1; i>=0; i--){
	for (var j =arr.length-1; j>=0; j--){
		console.log (arr[i][j]);
	}
}

А таким способом я создаю массив обратный первоночальному. Его легче проверять в console :) */
for (var i = 0; i<arr.length; i++){  
	for (var j = 0; j<arr.length; j++){
		arr1[i][j]=arr[arr.length-1-i][arr.length-1-j];
		console.log (arr1[i][j]);
	}
}
