/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 14:26:19
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 14:58:08
 * @FilePath: \hand-writing-guide\src\tests\instanceof.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import myInstanceof from "../instanceof";

describe("instanceof", () => {
  test("实例的原型是类的原型", () => {
    class Person {}
    const person = new Person();
    expect(myInstanceof(person, Person)).toBe(true);
  });

  test("实例的原型链上有 Object", () => {
    class Person {}
    const person = new Person();
    expect(myInstanceof(person, Object)).toBe(true);
  });

  test("实例的原型链上没有 Array", () => {
    class Person {}
    const person = new Person();
    expect(myInstanceof(person, Array)).toBe(false);
  });

  test("instanceof 右边必须是函数", () => {
    class Person {}
    const person = new Person();
    const obj = {};
    expect(myInstanceof(person, obj)).toBe(false);
  });
});
