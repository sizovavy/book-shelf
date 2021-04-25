function findUnique (arr) {
    return Array.from(new Set(arr))
}

function findMissing(arr) {
    arr.sort((a,b) => a - b )
    if( arr.length === 1 ) {return;}
    for(let i = 1; i < arr.length; i++){
      if(arr[i] - arr[i-1] > 1) return arr[i-1] + 1
    }        
}

function reversePrint(list) {
    if (list.next) {
      reversePrint(list.next);
    }
  
    console.log(list.value);
}

