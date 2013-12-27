var Calculator = function() {
  add = function(num1, num2) {
    return num1 + num2;
  }

  substract = function(num1, num2) {
    return num1 - num2;
  }

  multiply = function(num1, num2) {
    return num1 * num2;
  }

  divide = function(num1, num2) {
    return num1 / num2;
  }

  return {
    "add": add,
    "substract": substract,
    "multiply": multiply,
    "divide": divide,
  }
}
