const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      //webpack根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的loader。在这种情况下，以css结尾的全部文件，都将被提供给 style-loader和css-loader。
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      //事实上 file-loader和url-loader可以接收并加载任何文件，然后将其输出带构建目录。
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      //如果是加载csv和xml的话，我们使用csv-loader和xml-loader。
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};