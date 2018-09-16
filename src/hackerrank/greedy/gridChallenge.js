

function solution(grid) {
    grid = grid.map(str => str.split("").sort())
    grid
    for (let i = 0; i < grid.length - 1; i++) {
        const lastLetterInGrid = grid[i][grid[i].length - 1]
        const firstLetterInNextGrig = grid[i + 1][0]
        if (lastLetterInGrid > firstLetterInNextGrig) {
            return 'NO'
        }
    }
    return 'YES'
}

let grid = [   'vbznfwg', 'eacklwk',  'bmarzvp',  'rwgnjqd',  'xqddtln', 'wuxtduk',  'rzmfcik', ]

let t = solution(grid)
t
