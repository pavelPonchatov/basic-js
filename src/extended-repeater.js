 module.exports = function repeater(str, options) {
    let arrStr = [];
    if(options.repeatTimes == undefined){
        arrStr.push(str + options.addition);
    }
    for(let i = 0; i < options.repeatTimes; i++){
        if(Object.keys(options).length < 3){
            arrStr.push(str);
        }else if("additionSeparator" in options == false){
            arrStr.push(str);
            arrStr[i]= (str + (options.addition ).repeat(options.additionRepeatTimes) );
            console.log(1);
        }else{
            arrStr.push(str);
            arrStr[i]= (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes) );
            arrStr[i] = arrStr[i].slice(0,arrStr[i].length - options.additionSeparator.length);
        }
    }
    if(options.separator == undefined){
        return arrStr.join("+");
    }

    return arrStr.join(options.separator);
};
  

// function repeater(str, options) {
//     let arrStr = [];
//     if(options.repeatTimes == undefined){
//         arrStr.push(str + options.addition);
//     }
//     for(let i = 0; i < options.repeatTimes; i++){
//         if(Object.keys(options).length < 3){
//             arrStr.push(str);
//         }else if("additionSeparator" in options == false){
//             arrStr.push(str);
//             arrStr[i]= (str + (options.addition ).repeat(options.additionRepeatTimes) );
//             console.log(1);
//         }else{
//             arrStr.push(str);
//             arrStr[i]= (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes) );
//             arrStr[i] = arrStr[i].slice(0,arrStr[i].length - options.additionSeparator.length);
//         }
//     }
//     if(options.separator == undefined){
//         return arrStr.join("+");
//     }

//     return arrStr.join(options.separator);
// };





