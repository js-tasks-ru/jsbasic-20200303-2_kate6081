let calculator = {
  num1: null,
  num2: null,
  read(a,b){
      this.num1 = a;
      this.num2 = b;
  },
  sum(){
      let s = 0;
      s = this.num1 + this.num2;
      return s;
  },
  mul(){
      let m = 1;
      m = this.num1 * this.num2;
      return m;
  
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
