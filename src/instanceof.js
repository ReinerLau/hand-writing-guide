/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 14:29:44
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 15:07:17
 * @FilePath: \hand-writing-guide\src\instanceof.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myInstanceof(left, right) {
  if (typeof right !== "function") {
    return false;
  }
  const rightPrototype = right.prototype;
  let leftPrototype = Object.getPrototypeOf(left);
  while (true) {
    if (!leftPrototype) return false;
    if (leftPrototype === rightPrototype) return true;
    leftPrototype = Object.getPrototypeOf(leftPrototype);
  }
}

export default myInstanceof;
