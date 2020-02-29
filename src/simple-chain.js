const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;;
  },
  addLink(value) {
    let link = `( ${value} )`;
    if(value == null){
      link = "( null )";
    }else if(value == undefined){
      link = "( )";
    }
    this.arrChain.push(link);
    return this;
  },
  removeLink(position) {
    if(!Number(position) || position > this.arrChain.length || position < 1 || position == 0){
      this.arrChain = [];
      throw new Error();
    }
    this.arrChain.splice(position-1,1);
    return this;
  },
  reverseChain() {
   this.arrChain.reverse();
   return this;
  },
  finishChain() {
    let allChain = this.arrChain.slice(0, this.arrChain.length).join('~~');
    console.log(allChain);
    this.arrChain = [];
    return allChain;
  }
};

module.exports = chainMaker;





