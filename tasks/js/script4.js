
function getLetterOfWord(word) {
    let i = 0
    i--
    function getLetter() {
        i++
        return word.charAt(i)
    }
    return getLetter
}

function getGameTranslator(word) {
    let letterCounter = 0
    for (let i = 0; i < word.length; i++) {
        let userLetter = prompt('Назовите на английском пору года между зимой и летом. Вводите по одной букве:')
        let letter = res()
        if (userLetter === letter) {
            letterCounter++
            alert('Вы угадали букву')
        } else
            alert('Вы не угадали букву')
    }
    return letterCounter
}
const word = 'spring'
let res = getLetterOfWord(word)
let game = getGameTranslator(word)

result1.innerHTML = `Загаданное слово: <span>${word}</span><br>
Угадано букв = <span>${game}</span>`



