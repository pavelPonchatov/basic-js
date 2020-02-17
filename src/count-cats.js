module.exports = function countCats(arr) {

  let res = 0;

  for(let i = 0; i < arr.length;i++){
    if(arr[i] == "^^"){
      res += 1;
    }
  }

  return res;


  throw 'Not implemented';
  
};
