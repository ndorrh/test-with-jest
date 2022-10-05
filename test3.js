const calculator = {
  add: (a,b) => {
    if (typeof(a) === 'string' || typeof(b) === 'string'){
      return 'error';
    } else if (a != undefined && b === undefined){
      return 'one value is missing'
    } else if (a === undefined && b === undefined) {
      return 0;
    }else {
      return a+b;
    }
  }
}



module.exports = calculator;