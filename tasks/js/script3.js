
function createIntervalCounter(startVal, endVal) {
    startVal--
    function getCounter() {
        if (startVal === endVal) return startVal = 1
        else return ++startVal
    }
    return getCounter
}

let monthCntr = createIntervalCounter(1, 12)

document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)
document.write(`<p>${monthCntr()}</p>`)



