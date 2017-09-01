module.exports = function (config) {
  //定义别名
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  Object.assign(config.resolve.alias, {
    common: `${__dirname}/src/script/common`,
    constant: `${__dirname}/src/script/constant`,
    component: `${__dirname}/src/script/component`,
    route: `${__dirname}/src/script/route`,
    service: `${__dirname}/src/script/service`,
    store: `${__dirname}/src/script/store`,
    utils: `${__dirname}/src/script/utils`,
    style: `${__dirname}/src/style`
  });

};