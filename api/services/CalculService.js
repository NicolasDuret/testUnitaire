module.exports = {

    add : (a , b  ) => {
        return a+b;
    },

    sub : (a , b ) => {
        return a -b;
    },

    mul : (a , b  ) => {
        return a*b;
    },

    div : (a , b  ) => {
        return a/b;
    },

    prct : (a , prct  ) => {
      let result = CalculService.mul(a, prct);
      result = CalculService.div(result , 100)
      return result;
  },




}
