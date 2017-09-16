
let s = "CAGCCTAAAAACCCCCCCCCGTTTTT"
let p = [2, 5, 0]
let q = [4, 5, 6]
// let res = []
// function solutionBadPerf(s, p, q) {
//     const res = []

//     s = s.split('').map(x => {
//         if (x == 'A') return 1
//         if (x == 'C') return 2
//         if (x == 'G') return 3
//         if (x == 'T') return 4
//     })

//     p.forEach(function (element, i) {
//         const start = element
//         const end = q[i]
//         let min = 4
//         for (let t = start; t <= end; t++) {
//             if (s[t] < min) min = s[t]
//         }
//         res.push(min)
//     });
//     return res
// }


// var t = solutionBadPerf(s, p, q)
// console.log(t)




// not from my own
function solution(s, p, q) {
    const res = []
    const as = [0]
    const cs = [0]
    const gs = [0]

    s = s.split('').forEach((x,i) => {
        as[i+1]= x === 'A' ? as[i] + 1 : as[i]
        cs[i+1]= x === 'C' ? cs[i] + 1 : cs[i]
        gs[i+1]= x === 'G' ? gs[i] + 1 : gs[i]
        
    })
    p.forEach( (element, i)=> {
        let a = as[q[i]+1] - as[element]
        let c = cs[q[i]+1] - cs[element]
        let g = gs[q[i]+1] - gs[element]
        res[i] = a>0 ? 1 : c>0 ? 2 : g>0 ? 3 : 4;
    });
    return res
}
var t = solution(s, p, q)
console.log(t)
