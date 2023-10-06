// Тут переменные - const и let
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const sumbitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const fissionBtn = document.getElementById('fission')
let action = '+'

// Здесь кодируем функцию клика по кнопке (каждую)
// Плюс
plusBtn.onclick = function () {
    action = '+'
}
// Минус
minusBtn.onclick = function () {
    action = '-'
}
// Умножение
multiplyBtn.onclick = function () {
    action = '*'
}
// Деление
fissionBtn.onclick = function () {
    action = '/'
}


// Это функция того что при x > 0 зеленый и наоборот. 
function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else { // тут условие
        resultElement.style.color = 'green'  
    }
    resultElement.textContent = result // Меняем цвет и выводим в переменную с id result
}

// эта функция калькулятора
function ComputeWithAction (inp1, inp2, actionSymbol) {  // inp1/2 созданные переменные для константы
    const num1 = Number(inp1.value) // тут создаем const num и соотвественно присваиваем ей inp
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') { // условия....
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '*') {
        return num1 * num2 
    } else if (actionSymbol == '/') {
        return num1 / num2 
    }
}

sumbitBtn.onclick = function () {  // ну и сама функция вывода получившегося значения 
    const result = ComputeWithAction(input1, input2, action) // инпуты берем с полей, актион как переменная в начале описана.
    printResult(result) // вывод результата
}