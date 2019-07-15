module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].template = '/公司/project/ToDoList/index.html'
          return args
        })
    }
  }