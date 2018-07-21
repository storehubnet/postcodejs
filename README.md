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
  postcode.search('MY', '96')
  postcode.search('MY', 96)

  postcode.postcode('MY', '96507')
  postcode.postcode('MY', 96507)

  postcode.statePostcodes ('MY', 'Sarawak')
  postcode.districtPostcodes('MY', 'Padang Terap')
  postcode.cityPostcodes('MY', 'Kangar')
```

## Version
0.0.3

## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).
