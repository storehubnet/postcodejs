# postcodejs

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://opensource.org/licenses/MIT)

`postcodejs` is a nodejs library for query worldwide postcode descriptions

## Requirements

`postcodejs` works with nodejs 6.9+

## Adding postcodejs to your project

### npm
`npm install postcodejs -s`

## Usage

```js
  postcode.postcode('MY', '96507')
  postcode.postcode('MY', 96507)

  postcode.statePostcodes ('MY', 'Sarawak')
  postcode.districtPostcodes('MY', 'Padang Terap')
  postcode.cityPostcodes('MY', 'Kangar')
```

## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).
