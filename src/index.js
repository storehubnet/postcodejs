const postcode = require('./postcode');

module.exports = {
    postcode: postcode.postcode,
    statePostcodes: postcode.statePostcodes,
    cityPostcodes: postcode.cityPostcodes,
    districtPostcodes: postcode.districtPostcodes,
}