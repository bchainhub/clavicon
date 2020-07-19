# Clavicon

A tiny library for generating stripes identicons.

## Installation

[Rollup](https://rollupjs.org) is used to deliver JS file.
You can build your own file with:

```bash
yarn install
yarn build
```

## Usage

```js
import 'clavicon';

document.write("<pre>" + clavicon.create(address) + "</pre>");
```

## CDN

Latest version

```html
<script src="https://cdn.jsdelivr.net/gh/cryptohub-digital/clavicon/dist/clavicon.js"></script>
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[WTFPL](LICENSE)
