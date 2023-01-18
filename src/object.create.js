/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 13:48:21
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 14:16:55
 * @FilePath: \hand-writing-guide\src\object.create.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function create(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

export default create;
