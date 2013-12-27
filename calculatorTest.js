describe("calculator", function(){

  it("should be able to add", function(){
    var result = add(1, 2);
    var expected = 3;
    expect(result).toBe(expected);
  });

})