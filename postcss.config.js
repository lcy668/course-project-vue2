module.exports = {
  plugins: [
    {
      'postcss-pxtorem': {
        rootValue: 50,
        propList: ['*'],
        minPixelValue: 1
      }
    }
  ]
}
