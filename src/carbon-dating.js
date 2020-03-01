const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

 module.exports = function dateSample(sampleActivity) {
  if(sampleActivity == 0 || sampleActivity < 0 || sampleActivity == 9000){
    return false;
  }

  if(sampleActivity != undefined && typeof sampleActivity == "string" && MODERN_ACTIVITY > sampleActivity > 0){
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number.parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  }else{
    return false;
  }



 

}
