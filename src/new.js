/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 15:12:47
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 16:03:25
 * @FilePath: \hand-writing-guide\src\new.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myNew() {
  const constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") return false;
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, arguments);
  const flag =
    result && (typeof result === "object" || typeof result === "function");
  return flag ? result : obj;
}

export default myNew;
