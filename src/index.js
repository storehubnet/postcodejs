const postcode = require('./postcode');

module.exports = {
    postcode: postcode.postcode,
    search: postcode.search,
    statePostcodes: postcode.statePostcodes,
    cityPostcodes: postcode.cityPostcodes,
    districtPostcodes: postcode.districtPostcodes,
};
