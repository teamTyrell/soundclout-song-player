describe("Suite Installation Check", () => {

  test("it should pass for a passing test", () => {
    const input = [1, 2, 3];
    const output = 3;

    const returnLastNum = (arr) => {
      return arr[arr.length - 1];
    }

    expect(returnLastNum(input)).toEqual(output);
  });

  xtest("it should fail for a failing test", () => {
    const input = [1, 2, 3, 4];
    const output = 3;

    const returnLastNum = (arr) => {
      return arr[arr.length - 1];
    }

    expect(returnLastNum(input)).toEqual(output);
  });
});