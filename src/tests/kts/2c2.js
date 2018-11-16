const cards = { 1: { angle: 42 }, 2: { angle: 90 }, 3: { angle: 110 }, 4: { angle: 41 } }
const anglesLog = {}
let uniquenessLog = {}
let removedCardId
let isDone

function buildAnglesLog() {
    Object.keys(cards).forEach(key => {
        const angle = cards[key].angle
        addIdToAnglesLog(angle, parseInt(key))
    });
}

function addIdToAnglesLog(angle, key) {
    if (!anglesLog[angle]) {
        anglesLog[angle] = { ids: [] }
    }
    anglesLog[angle].ids.push(key)
}


// Build uniquenessLog
function buildUniquenessLog() {
    uniquenessLog = {}
    const anglesArr = Object.keys(anglesLog).sort((a,b)=>b-a)
    addToUniquenessLog(getUniqueness(anglesArr[0], anglesArr[anglesArr.length - 1], anglesArr[1]), anglesArr[anglesArr.length - 1])
    for (let i = 1; i < anglesArr.length - 1; i++) {
        const uniqueness = getUniqueness(anglesArr[i], anglesArr[i - 1], anglesArr[i + 1])
        addToUniquenessLog(uniqueness, anglesArr[i])
    }
    addToUniquenessLog(getUniqueness(anglesArr[anglesArr.length - 1], anglesArr[anglesArr.length - 2], anglesArr[0]), anglesArr[anglesArr.length - 1])
}


function addToUniquenessLog(uniqueness, angle) {
    if (!uniquenessLog[uniqueness]) {
        uniquenessLog[uniqueness] = []
    }
    uniquenessLog[uniqueness].push(angle)
}

// const degreeDiff = (x, y) => Math.min(Math.abs(x - y), 360 - Math.abs(x - y))
// const degreeDiffAccountingForAngle = (x,y) => (x-y < 0) ? (360 + x-y) : (x-y)


function getUniqueness(mainAngle, justBeforeItAngle, justAfterItAngle) {
    let diff1 = mainAngle - justBeforeItAngle
    let diff2 = justAfterItAngle - mainAngle
    if (diff1 < 0) {
        diff1 = diff1 + 360
    }
    if (diff2 < 0) {
        diff2 = diff2 + 360
    }
    return diff1 + diff2
}

buildAnglesLog()
buildUniquenessLog()

while (!isDone) {
    removeOneCard()
    removeCardFromAnglesLog()
    removeCardFromCardsLog()
    buildUniquenessLog()
}


function removeOneCard() {
    const uniquenessOfCardsToBeRemoved = Object.keys(uniquenessLog)[0]
    const anglesOfCardsToBeRemoved = uniquenessLog[uniquenessOfCardsToBeRemoved]
    let idsThatMightGetRemoved = []
    anglesOfCardsToBeRemoved.forEach(angle => {
        idsThatMightGetRemoved = idsThatMightGetRemoved.concat(anglesLog[angle].ids)
    })
    removedCardId = idsThatMightGetRemoved.sort((a, b) => b - a)[0]
    console.log(removedCardId)
}

function removeCardFromAnglesLog() {
    const angleThatWeRemovedACardFrom = cards[removedCardId].angle
    anglesLog[angleThatWeRemovedACardFrom].ids.pop()
    if (!anglesLog[angleThatWeRemovedACardFrom].length) {
        delete anglesLog[angleThatWeRemovedACardFrom]
    }

}

function removeCardFromCardsLog() {
    delete cards[removedCardId]
    if (!Object.keys(cards).length) {
        isDone = true
    }
}
