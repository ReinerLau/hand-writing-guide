/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 09:00:44
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 15:20:38
 * @FilePath: \hand-writing-guide\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Person() {
  this.name = "reiner";
}
const person = new Person();
console.log(person.name);
console.log(Person.prototype.isPrototypeOf(person));
