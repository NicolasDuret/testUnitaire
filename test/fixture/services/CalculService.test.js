const assert = require('assert');
const sinon = require('sinon');

describe('CalculService' , function(){

  describe('#add' , function(){

    it('should add values' , function(){
      let result = CalculService.add( 1 , 5);
      assert.equal(result , 6);
    })


  })

  describe('#sub' , function(){
    it('should sub values' , function(){
      let result = CalculService.sub( 3 , 2);
      assert.equal(result , 1);
    })

  })

  describe('#mul' , function(){
    it('should mul values' , function(){
      let result = CalculService.mul( 2 , 5);
      assert.equal(result , 10);
    })

  })

  describe('#div' , function(){
    it('should div values' , function(){
      let result = CalculService.div( 25 , 5);
      assert.equal(result , 5);
    })

    it('should not div value by 0' , function(){
      try {
        let result = CalculService.div(25, 0);
      }catch(e){
        assert(e.message , 'Divide by zero not allowed');
        return;
      }
      assert(false);
    })

  })

  describe('#prct' , function(){
    it('should calculate a percentage' , function(){
      var stub1 = sinon.stub(CalculService, 'mul').callsFake((a , b) => {return 5})
      var stub2 = sinon.stub(CalculService, 'div').callsFake((a , b) => {return 20})

      let result = CalculService.prct( 100 , 25);



      assert.equal(result , 20);

      CalculService.mul.restore();
      CalculService.div.restore();


    })

    it('should calls div and mul when calculating a percentage' , function(){
      const spyMul = sinon.spy(CalculService, "mul");
      const spyDiv = sinon.spy(CalculService, "div");
      const result = CalculService.prct(10 , 10);

      assert(spyDiv.calledOnce);
      assert(spyMul.calledOnce);

      assert(spyDiv.calledImmediatelyAfter(spyMul));


      CalculService.mul.restore();
      CalculService.div.restore();

    })

  })


  describe('#pow' , function(){

    it('should calls div and mul when calculating a percentage' , function(){
      const spyMul = sinon.spy(CalculService, "mul");
      const spyDiv = sinon.spy(CalculService, "div");
      const result = CalculService.pow(5);

      assert.equal(spyDiv.callCount , 0);
      assert(spyMul.calledOnce);
      assert(spyMul.calledWith(5 , 5));


      CalculService.mul.restore();
      CalculService.div.restore();

    })

  })
})
