
function bindCalculator() {
  document.getElementById("add").onclick = function() {
    //get numbers
    var num1 = parseInt(document.getElementById("adder1").value);
    var num2 = parseInt(document.getElementById("adder2").value);

    //calculate the result
    document.getElementById("addResult").innerHTML = add(num1, num2);
  }

  document.getElementById("substract").onclick = function() {
    //get numbers
    var num1 = parseInt(document.getElementById("substracter1").value);
    var num2 = parseInt(document.getElementById("substracter2").value);

    //calculate the result
    document.getElementById("substractResult").innerHTML = substract(num1, num2);
  }

  document.getElementById("multiply").onclick = function() {
    //get numbers
    var num1 = parseInt(document.getElementById("multiplyer1").value);
    var num2 = parseInt(document.getElementById("multiplyer2").value);
    
    //calculate the result
    document.getElementById("multiplyResult").innerHTML = multiply(num1, num2);
  }

  document.getElementById("divide").onclick = function() {
    //get numbers
    var num1 = parseInt(document.getElementById("divider1").value);
    var num2 = parseInt(document.getElementById("divider2").value);

    //calculate the result
    document.getElementById("divideResult").innerHTML = divide(num1, num2);
  }
}

window.onload = bindCalculator