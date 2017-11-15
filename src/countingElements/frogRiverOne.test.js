const solution = require('./frogRiverOne');



test.only('should pass', () => {
  expect(solution (1, [3,3,3,3,3,3,3])).toBe(-1);

});


// return (area/2) *2 +  (area/2+1)*2