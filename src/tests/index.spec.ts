/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 09:00:20
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 13:26:25
 * @FilePath: \hand-writing-guide\src\tests\index.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.spec.ts
import { add } from "../index";

it("init", () => {
  expect(add(1, 2)).toBe(3);
});
