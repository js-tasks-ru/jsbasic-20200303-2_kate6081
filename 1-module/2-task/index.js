/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
* Эту функцию нужно поменять так,
* чтобы функция sayHello работала корректно
*/
function isValid(name) {
  const spc = / /;
  if (!name) {
    return false 
  } else
    if ((name.length >= 4) && (!spc.test(name))) {
      return true
    } else {
      return false
    }
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();