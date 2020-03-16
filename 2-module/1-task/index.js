/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sum = 0;
    for (let symb of Object.values(salaries)) {
        if (symb === 0 || (symb / symb === 1 )){
            sum += symb; 
        }
        
      }
    
      return sum;
    }
    
