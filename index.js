'use strict';

function RemoveSourceWebpackPlugin(para) {
  let regexList = [];
  if (typeof para === 'string') {
    regexList = [ new RegExp(para) ];
  } else if (para instanceof RegExp) {
    regexList = [ para ];
  } else if (para instanceof Array) {
    regexList = para.map(item => {
      if (typeof item === 'string') {
        return new RegExp(item);
      } else if (item instanceof RegExp) {
        return item;
      } else {
        throw new Error('remove-source-webpack-plugin parameter error');
      }
    });
  } else {
    throw new Error('remove-source-webpack-plugin parameter error');
  }
  this.regexList = regexList;
}

RemoveSourceWebpackPlugin.prototype.apply = function(compiler) {
  const remover = (compilation, callback) => {
    const keys = Object.keys(compilation.assets);

    this.regexList.forEach(regex => {
      keys.forEach(key => {
        if (regex.test(key)) delete compilation.assets[key];
      });
    });

    if (callback) callback();
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tap('remove-source-webpack-plugin', remover);
  } else {
    compiler.plugin('emit', remover);
  }
};

module.exports = RemoveSourceWebpackPlugin;
