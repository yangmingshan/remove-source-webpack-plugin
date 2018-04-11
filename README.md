# remove-source-webpack-plugin
A plugin for webpack to remove the source that are not needed. Can be used with [html-webpack-inline-source-plugin](https://github.com/DustinJackson/html-webpack-inline-source-plugin) to remove inlined source.

## Installation
You can install it via [yarn](https://yarnpkg.com/) or [npm](https://npmjs.com/).
```
$ yarn add remove-source-webpack-plugin --dev
$ npm install remove-source-webpack-plugin --save-dev
```

## Usage
Require the plugin in your webpack config:
```
const RemoveSourceWebpackPlugin = require('remove-source-webpack-plugin');
```
Add the plugin to your webpack config as follows:
```
plugins: [
  new RemoveSourceWebpackPlugin(/runtime.*\.js$/) // array is also accepted
]
```

## Demo
https://github.com/yangmingshan/react-demo

## License
[MIT](https://opensource.org/licenses/MIT)
