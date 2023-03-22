function getRandomNum(minVal = 1, maxVal = 20) {
    return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
}

function getSumTasks(minVal, maxVal) {
    let firstNum = getRandomNum(minVal, maxVal)
    let secondNum = getRandomNum(minVal, maxVal)
    let sum = firstNum + secondNum
    let userSum = parseInt(prompt(`${firstNum} + ${secondNum} = Чему равна сумма?`))
    if (userSum === sum) alert('Правильно')
    else{
        alert('Не правильно')
        clearInterval(res)
        result1.innerHTML = `GAME OVER`
    }
}

const  res = setInterval(getSumTasks, 10000)







