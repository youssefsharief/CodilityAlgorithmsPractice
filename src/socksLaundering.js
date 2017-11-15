function solution(  k,c,d) {
    
    var counts = {};
    
    for (var i = 0; i < c.length; i++) {
      var num = c[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    console.log(counts.keys())
}

var x = solution(3,[1,2,2,2,2,5,5,6,6,5,5,5,4,5,6,6],[5,9,9,8,5,2,1,2,3,8,8,8,52,1,2,3])
x

