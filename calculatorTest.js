describe("calculator", function(){

  it("should be able to add", function(){
    var result = add(1, 2);
    var expected = 3;
    expect(result).toBe(expected);
  });

  it("should be able to substract", function(){
    var result = substract(1, 2);
    var expected = -1;
    expect(result).toBe(expected);
  });

  it("should be able to multiply", function(){
    var result = multiply(1, 2);
    var expected = 2;
    expect(result).toBe(expected);
  });

  it("should be able to divide", function(){
    var result = divide(1, 2);
    var expected = 0.5;
    expect(result).toBe(expected);
  });

})