function num_array(arr){
    var newArr = [];
    var index = 0;
    for(var i =0; i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            newArr[index] = arr[i]; 
            index++;
        }
    }
    console.log(arr);
    console.log(newArr);
    return newArr;
}
num_array([3,"Hir",4,"Chaudhary",5,6]);