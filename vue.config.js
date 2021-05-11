module.exports = {
  // 多页模式下构建应用
  pages:{
    index:{
      entry:`src/project/${process.env.VUE_APP_PROJECT}/main.js`,
    },
    bbb:'src/project/bbb/main.js',
  }
}
