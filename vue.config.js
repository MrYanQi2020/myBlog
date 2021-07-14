module.exports = {
    devServer: {
        proxy: {
            '/getconfig': {
              target: 'https://pagead2.googlesyndication.com'
            },
          }
    }
  }