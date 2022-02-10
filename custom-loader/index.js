const marked = require('marked');
module.exports = function(source) {
  const htmlStr = marked.parse(source);
  return `<template><div><code>${htmlStr}</code></div></template>`;
};
