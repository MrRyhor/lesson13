
//=============== Рекурсивная функция ==================================================
function getTaskSolutionRekursive(n) {
    if (n === 0 || n === 1) return 1
    else {
        let x_n
        for (let i = 2; i <= n; i++) {
            x_n = getTaskSolutionRekursive(n - 1) + 2 * getTaskSolutionRekursive(n - 2)
        }
        return x_n
    }
}

//================ Обычная функция =====================================================
// function getTaskSolution(m) {
//     let arr = []
//     for (let i = 0; i <= m; i++) {
//         if (i === 0 || i === 1) arr[i] = 1
//         else
//         arr[i] = arr[i - 1] + 2 * arr[i - 2]        
//     }
//     return arr.slice(m)
// }

function getTaskSolution(m) {
    if (m === 0 || m === 1) return 1
    else {
        let x_m_1 = 1, x_m_2 = 1, x_m
        for (let i = 2; i <= m; i++) {
            x_m = x_m_1 + 2 * x_m_2
            x_m_2 = x_m_1
            x_m_1 = x_m
        }
        return x_m
    }
}
let n = parseInt(prompt('n ='))
let x1 = getTaskSolutionRekursive(n)
let m = parseInt(prompt('m ='))
let x2 = getTaskSolution(m)

result1.innerHTML = `С использованием рекурсивной функци:<br>X(<span>${n}</span>) = <span>${x1}</span><br>
С использованием обычной функции:<br>X(<span>${m}</span>) = <span>${x2}</span>`
