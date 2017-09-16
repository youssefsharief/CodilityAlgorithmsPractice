
// // usage example:

// function solution (a){
//     const arr = []
    
//     a.forEach(elem => {
//         var index = arr.indexOf(elem)
//         if (index == -1) arr.push(elem)
//         else arr.splice(index, 1)
//     })
//     return arr[0]
// }




// usage example:

function solution (a){
    // const arr = []
    function check(elem1){
        a.forEach(elem2=>{
            if (elem1===elem2) {
                unique = false
                return
            }
            else unique=elem1
             
        })
    }
    a.forEach(elem1 => {
        let unique=null
        check(elem1)
        // if (unique) return unique
        return 5
    })

}

var y = solution([1,2,1,2,5,5,7])
y


function test (arr){
    arr.forEach(ele=>{
        if (ele===5) return 10
    })
}

var t = test([1,1,0,5])
t
