/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    var f = 1;
    if (n < 0) {
        console.log('Чтобы использовать функцию factorial(n) используйте множество неотрицательных целых чисел.')
    } else{ 
        for (i = 1; i <= n; i++) {
            f = f * i;
        }
    }
    return (f);
}
