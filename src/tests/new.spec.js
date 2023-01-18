/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 15:13:21
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 16:00:22
 * @FilePath: \hand-writing-guide\src\tests\new.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import myNew from "../new";

describe("new", () => {
  test("返回一个对象", () => {
    function Person() {}
    const person = myNew(Person);
    expect(typeof person).toBe("object");
  });

  test("必须接收一个函数", () => {
    expect(myNew({})).toBe(false);
  });

  test("实例的原型是构造函数的原型", () => {
    function Person() {}
    const person = myNew(Person);
    expect(Person.prototype.isPrototypeOf(person)).toBe(true);
  });

  test("this 指向实例并初始化", () => {
    function Person() {
      this.name = "reiner";
    }
    const person = myNew(Person);
    expect(person.name).toBe("reiner");
  });

  test("接收参数", () => {
    function Person(name) {
      this.name = name;
    }
    const person = myNew(Person, "reiner");
    expect(person.name).toBe("reiner");
  });

  test("判断构造函数返回值", () => {
    const obj = {};
    function Person() {
      return obj;
    }
    const person = myNew(Person);
    expect(person).toBe(obj);
  });
});
