# [Ant-design-colors](https://yfill.cn/ant-design-colors) &middot; [![GitHub license][mit]][mit-url] [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url]

A theme extension.

## Install

using npm:
```sh
npm install @yfill/ant-design-colors --save
```
or using yarn:
```sh
yarn add @yfill/ant-design-colors
```

## Usage

* Import resources and use the use method to install, set the color( red / volcano / orange / gold / yellow / lime / green / cyan / blue / geekblue / purple / magenta / grey ).

  ```js
  import Theme from "@yfill/theme";
  import AntDesignColors from "@yfill/ant-design-colors";
  Theme.run()
       .use(AntDesignColors, "blue");
  ```

  ```html
  <script src="https://unpkg.com/@yfill/theme"></script>
  <script src="https://unpkg.com/@yfill/ant-design-colors"></script>
  <script>
    Theme.run()
         .use(AntDesignColors, "blue");
  </script>
  ```
[mit]:https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]:https://github.com/Yfill/ant-design-colors/blob/main/LICENSE
[npm]: https://img.shields.io/npm/v/@yfill/ant-design-colors.svg
[npm-url]: https://www.npmjs.com/package/@yfill/ant-design-colors
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill/ant-design-colors
[build-size-url]: https://bundlephobia.com/result?p=@yfill/ant-design-colors