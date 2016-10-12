
var O_perators = function(){

  this.operator = ["+","-"]

  this.get_operator = function(index_is){
      return this.operator[index_is-1]
  }

}

var O_perand = function(){

  this.string_of_Operand = [
                            "zero",
                            "one",
                            "two",
                            "three",
                            "four",
                            "five",
                            "six",
                            "seven",
                            "eight",
                            "nine"
                          ]

  this.get_operand = function(index_is){
      return this.string_of_Operand[index_is]
  }

}


var Captcha = function(){

var operators = new O_perators()
var operand    = new O_perand()

this.generate = function(i1,i2,i3,i4){

  if(i1 === 1)
    return i3 + " " + operators.get_operator(i2)+ " " + operand.get_operand(i4)
  else return operand.get_operand(i3) + " " + operators.get_operator(i2)+ " " + i4
}


}



describe("The Captcha", function() {

  var captcha = new Captcha();

  it("generate to 0 + zero", function() {
    expect(captcha.generate(1,1,0,0)).toBe("0 + zero");
  });

  it("generate to 0 + one", function() {
    expect(captcha.generate(1,1,0,1)).toBe("0 + one");
  });

  it("generate to 0 + two", function() {
    expect(captcha.generate(1,1,0,2)).toBe("0 + two");
  });

  it("generate to 0 + three", function() {
    expect(captcha.generate(1,1,0,3)).toBe("0 + three");
  });

  it("generate to 0 + four", function() {
    expect(captcha.generate(1,1,0,4)).toBe("0 + four");
  });

  it("generate to 0 + ", function() {
    expect(captcha.generate(1,1,0,5)).toBe("0 + five");
  });

  it("generate to 0 + six", function() {
    expect(captcha.generate(1,1,0,6)).toBe("0 + six");
  });

  it("generate to 0 + seven", function() {
    expect(captcha.generate(1,1,0,7)).toBe("0 + seven");
  });

  it("generate to 0 + eight", function() {
    expect(captcha.generate(1,1,0,8)).toBe("0 + eight");
  });

  it("generate to 0 + nine", function() {
    expect(captcha.generate(1,1,0,9)).toBe("0 + nine");
  });

  it("generate to zero - 0", function() {
    expect(captcha.generate(2,2,0,0)).toBe("zero - 0");
  });

  it("generate to one - 0", function() {
    expect(captcha.generate(2,2,1,0)).toBe("one - 0");
  });

  it("generate to two - 0", function() {
    expect(captcha.generate(2,2,2,0)).toBe("two - 0");
  });




});
