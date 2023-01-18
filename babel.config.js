/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-01-18 09:38:59
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-01-18 09:52:28
 * @FilePath: \hand-writing-guide\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
