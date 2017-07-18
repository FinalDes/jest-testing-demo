const {
    alwaysTrue,
    legitString,
} = require('./index');

describe('#jest bascis', () => {
  it('I expect true to be true', () => {
    expect(true).toBe(true);
  });
});

describe('#alwaysTrue', () => {
  it('I expect it to always be true', () => {
    expect(alwaysTrue()).toBe(true);
  });

  it('I expect it not to be false', () => {
    expect(alwaysTrue()).not.toBe(false);
  });
});

describe('#legitString', () => {
  it("should detect 'cow' as legit string", () => {
    expect(legitString('cow')).toBe(true);
  });

  it("empty string is not legit string", () => {
    expect(legitString('')).toBe(true);
  });

  it('7 is not legit string', () => {
    expect(legitString(7)).toBe(false);
  });

  it("'7' is legit string", () => {
    expect(legitString('7')).toBe(true);
  });

  it('undefined is not legit string', () => {
    expect(legitString(undefined)).toBe(false);
  });

  it("'undefined' is a legit string",()=>{
    expect(legitString('undefined')).toBe(true);
  })

  it('null is not legit string', () => {
    expect(legitString(null)).toBe(false);
  });

  it("'null' is a legit string",()=>{
    expect(legitString('null')).toBe(true);
  })

  it("true is not legit string",() => {
    expect(legitString(true)).toBe(false);
  });

  it("'true' is legit string",() => {
    expect(legitString("true")).toBe(true);
  });

  it("false is not legit string",() => {
    expect(legitString(false)).toBe(false);
  });

  it("'false' is legit string",() => {
    expect(legitString("false")).toBe(true);
  });

  it("empty object is not legit string",() => {
    expect(legitString({})).toBe(false);
  });

  it("'{}' is not legit string",() => {
    expect(legitString('{}')).toBe(true);
  });

});
