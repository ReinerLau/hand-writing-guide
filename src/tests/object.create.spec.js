import create from "../object.create";

describe("Object.create", () => {
  test("参数对象是新对象的原型", () => {
    const foo = {
      name: "foo",
    };
    const bar = create(foo);
    expect(bar.name).toBe("foo");
    expect(bar.__proto__ == foo).toBe(true);
    expect(foo.isPrototypeOf(bar)).toBe(true);
  });
});
