# wmr-autoprefixer

This is a version of the [PostCSS-Autoprefixer](https://github.com/postcss/autoprefixer) bundled as a [wmr](https://wmr.dev/) plugin in a single file.

## Install
```bash
npm i --save-dev wmr-autoprefixer
```
or
```bash
yarn add --dev wmr-autoprefixer
```

## Usage

Add the plugin to your `wmr.config.mjs`.
```js
import { defineConfig } from 'wmr';
import autoPrefixer from 'wmr-autoprefixer';

export default defineConfig({
  plugins: [autoPrefixer()],
});
```

Configure the `browserslist` in your `package.json` according to the compatibility you need. See [Browserslist docs](https://github.com/browserslist/browserslist#queries) to know all the possibilities.

Ex:

```json
"browserslist": [
  "defaults",
  "last 4 versions"
]
```