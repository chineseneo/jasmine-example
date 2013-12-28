$(document).ready(function() {

  $("#add").click(function() {
    //get numbers
    var num1 = parseInt($("#adder1").val());
    var num2 = parseInt($("#adder2").val());

    //calculate the result
    $("#addResult").text(add(num1, num2));
  })

  $("#substract").click(function() {
    //get numbers
    var num1 = parseInt($("#substracter1").val());
    var num2 = parseInt($("#substracter2").val());

    //calculate the result
    $("#substractResult").text(substract(num1, num2));
  })

  $("#multiply").click(function() {
    //get numbers
    var num1 = parseInt($("#multiplyer1").val());
    var num2 = parseInt($("#multiplyer2").val());
    
    //calculate the result
    $("#multiplyResult").text(multiply(num1, num2));
  })

  $("#divide").click(function() {
    //get numbers
    var num1 = parseInt($("#divider1").val());
    var num2 = parseInt($("#divider2").val());

    //calculate the result
    $("#divideResult").text(divide(num1, num2));
  })
})
