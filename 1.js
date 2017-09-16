




function solution(number){

    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    let binary = dec2bin(number)
    
    let count = 0
    let max=0
    binary.split("").forEach((l,i)=>{
        if(l==0) count++
        if(l==1) {
            if(max<=count)  max=count
            count=0
        }
    })
    return max

}



var y = solution(11698400)
y

var z = dec2bin(11698400)
z







