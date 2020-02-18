module.exports = function createDreamTeam(members) {
  let res = [];
  if(Array.isArray(members) == false){
    return false;
  }

  for(let i = 0; i < members.length; i++){
    if(typeof members[i] == "number" || typeof members[i] == "boolean" ||  typeof members[i] == "undefined"){
      members.splice(i,1);
    }
  }

  for(let i = 0; i < members.length; i++){
    if(typeof members[i] == "string"){
      let name = members[i].replace(/\s+/g, '').split("");
      res.push(name[0]);
      
    }

  }

  return res.sort().join("").toUpperCase();
};