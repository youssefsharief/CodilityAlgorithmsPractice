function gcd(a, b) {
    if (a === b) return a
    const bigger = Math.max(a, b)
    const smaller = Math.min(a, b)
    if (bigger % smaller ===0)   return smaller
    else return gcd(smaller, bigger % smaller)
}
var t = gcd(1520, 120)
t
var t = gcd(1600, 80)
t
var t = gcd(15,3)
t
var t = gcd(80,60)
t
var t = gcd(180, 41)
t

var t = gcd(80, 15)
t
module.exports = gcd