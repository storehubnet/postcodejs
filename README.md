# postcodejs

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/npm.svg)
[![NPM](https://nodei.co/npm/postcodejs.png?compact=true)](https://nodei.co/npm/postcodejs/)


`postcodejs` is a nodejs library for query worldwide postcode descriptions

## Requirements

`postcodejs` works with nodejs 6.9+

## Adding postcodejs to your project

### npm
`npm install postcodejs -s`

## Suportted Countries
`MY`: Malaysia
`TH`: Thailand
`PH`: Philippines

## Usage

```js
  const postcode = require('postcodejs')

  postcode.search('MY', '96')
  postcode.search('MY', 96)

  postcode.postcode('MY', '96507')
  postcode.postcode('MY', 96507)

  //get states or province
  postcode.states('MY')

  postcode.statePostcodes ('MY', 'Sarawak')
  postcode.statePostcodes ('MY', ['Sarawak', 'Kelantan'])
  postcode.statePostcodes ('MY', 'Sarawak', true, false)
  postcode.statePostcodes ('MY', ['Sarawak', 'Kelantan'], true, false)

  postcode.districtPostcodes('MY', 'Padang Terap')
  postcode.cityPostcodes('MY', 'Kangar')
```

## Version
1.1.7

## What's new?
Added Philippines zipcodes!

## Not Support Your Country?
We welcome pull requests and if you have data of your country we are happy for you to jion us~

## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).
