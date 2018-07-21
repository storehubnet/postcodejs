const postcode = require('./postcode');

module.exports = {
    search: postcode.search,
    postcode: postcode.postcode,
    statePostcodes: postcode.statePostcodes,
    cityPostcodes: postcode.cityPostcodes,
    districtPostcodes: postcode.districtPostcodes,
};
