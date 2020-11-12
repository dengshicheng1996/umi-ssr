/*
 * @Author: 邓世城
 * @Date: 2020-09-14 11:51:17
 * @LastEditors: 邓世城
 * @LastEditTime: 2020-09-14 11:51:23
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
