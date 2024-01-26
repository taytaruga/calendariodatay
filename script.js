function displaynum(n1) {
    if (n1 === 'x') {
        n1 = '*';  // Substitui 'x' por '*' para a multiplicação
    }
    Calculator.text1.value += n1;
}

function calculate() {
    try {
        const result = eval(Calculator.text1.value.replace('x', '*'));
        Calculator.text1.value = result;
    } catch (error) {
        Calculator.text1.value = 'Erro';
    }
}