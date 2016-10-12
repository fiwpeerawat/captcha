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

  it("generate to 0 + five", function() {
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


});
