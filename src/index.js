
exports.min = function min (arr) {
  if(arr === undefined||arr.length===0){
        return 0;
    }
    let minn=arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]<minn){
            minn=arr[i];
        }
    }
    return minn;
}

exports.max = function max (arr) {
 if(arr === undefined||arr.length===0){
        return 0;
    }
    let maxn=arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>maxn){
            maxn=arr[i];
        }
    }
    return maxn;
}

exports.avg = function avg (arr) {
   if(arr === undefined||arr.length===0){
        return 0;
    }
    let sumn=0;
    for(let i=0; i<arr.length;i++){
        sumn+=arr[i];
        }

    return sumn/(arr.length);
}
