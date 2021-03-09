const assert = require('assert');

describe('CalculService' , function (){
  describe('#add', function (){

    it('should add values' , function (){
      let result = CalculService.add(1,5);

      assert.equal(result, 6);

    })
  })
  describe('#sub', function (){
    it('should sub values' , function (){
      let result = CalculService.sub(5,4);

      assert.equal(result, 1);

    })
  })
  describe('#mul', function (){
    it('should mul values' , function (){
      let result = CalculService.mul(1,5);

      assert.equal(result, 5);

    })
  })
  describe('#div', function (){
    it('should div values' , function (){
      let result = CalculService.div(5,5);

      assert.equal(result, 1);

    })
  })

  describe('#prct', function (){
    it('should calculate prct values' , function (){
      var stub1 = sinon.stub(CalculService, 'mul').callsFake((a , b) => {return 5})
      var stub2 = sinon.stub(CalculService, 'div').callsFake((a , b) => {return 20})
      let result = CalculService.prct(100,25);

      assert.equal(result, 1);

      CalculService.mul.restore();

    })
    it('should calls div and mul when calculating a percentage' , function (){
      const spyful = sinon.spy(CalculService, 'mul');

    })
  })

})
