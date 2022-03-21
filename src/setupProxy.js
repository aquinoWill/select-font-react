const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://json.ffwagency.md',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
