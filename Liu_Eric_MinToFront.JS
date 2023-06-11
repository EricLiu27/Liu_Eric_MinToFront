//when given a set of arrays, we want to find the minimal value and move that to the arr[0] shifting backwards any number that was ahead of it. 

function arr (array){
    var min = array[0];
    for(var i = 0; i < array.length; i++) {
    
        if ( array [i] < min){
    
            min = array [i];
        }
    
    }
    var temp = array[0];
    array[0] = min;
    
    var temp2 = 0;
    
    for(var i = 1; i < array.length; i++){
    
      if (temp != min){
    
        temp2 = array[i];
        array[i] = temp;
        temp = temp2;
      }
    
    }
    
    return array;
    
    }
    
    console.log (arr([4,2,1,3,5]));