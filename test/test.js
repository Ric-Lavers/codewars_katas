var assert = require('assert');
// import dontGiveMeFive from ('../scratch.js')
const dontGiveMeFive = (start, end) => {
    var x = 0
    for(var i = start; i < end+1; i++) {
      if ( i.toString().search(5) === -1) {
        x+= 1
        // console.log(i);
      }
    }
    return x;
  };
console.log(dontGiveMeFive(4,17));

describe('codewars', function() {
  describe('#dontGiveMeFive()', function() {
    it('should return 12, given (4, 17)', function() {
      var x = dontGiveMeFive(4,17);
      return x===12;
    });
  });
});
