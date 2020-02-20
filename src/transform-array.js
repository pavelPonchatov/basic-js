module.exports = function transform(arr) {
    try{
        if(Array.isArray(arr) != true){
            gggg();
        }   
    }catch(err){
        throw 'Not implemented';
    }

    for(let i = 0; i < arr.length; i++){
       
        if(arr[i] == "--double-next"){
            arr[i] = arr[i+1];
        }else if(arr[i] == "--discard-prev"){
            arr.splice(i,1);
            arr.splice(i-1,1);
            
        }else if(arr[i] == "--double-prev"){
            arr[i] = arr[i-1];
            
        }else if(arr[i] == "--discard-next"){
            arr.splice(i,1);
            arr.splice(i+1,1);
            
        }
    }

    return arr;
};
