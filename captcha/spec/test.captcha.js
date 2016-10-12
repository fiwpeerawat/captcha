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
    expect(captcha.generate(1,1,0,3)).toBe("0 + four");
  });



});
