function solution (x,a){
    const unique = new Set()
    for(let i=0; i<a.length; i++){
        if (a[i] <= x) {
            unique.add(a[i])
            if (unique.size==x ) return i
        }
    }
    return -1
}






module.exports = solution