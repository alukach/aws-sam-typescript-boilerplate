const path = require('path');
const { readFileSync } = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { yamlParse } = require('yaml-cfn');

const conf = {
  prodMode: process.env.NODE_ENV === 'production',
  templatePath: './template.yaml',
};
const cfn = yamlParse(readFileSync(conf.templatePath));
const entries = Object.values(cfn['Resources'])
  .filter(v => v.Type === 'AWS::Serverless::Function')
  .filter(v => v.Properties.Runtime.startsWith('nodejs'))
  .map(v => v.Properties.Handler.split('.')[0])
  .reduce((entries, handlerFile) => Object.assign(entries, {[handlerFile]: `./src/${handlerFile}.ts`}), {});

console.log(`Building for ${conf.prodMode ? 'production' : 'development'}...`)

module.exports = {
  // http://codys.club/blog/2015/07/04/webpack-create-multiple-bundles-with-entry-points/#sec-3
  entry: entries,
  target: 'node',
  mode: conf.prodMode ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    libraryTarget: 'commonjs2',
  },
  plugins: conf.prodMode ? [
    new UglifyJsPlugin({
      parallel: true,
      extractComments: true,
      sourceMap: true,
    }),
  ] : [],
};
