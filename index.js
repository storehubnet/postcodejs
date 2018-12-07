const postcode = require('./src/postcode');

module.exports = {
    postcode: postcode.postcode,
    search: postcode.search,
    states: postcode.states,
    statePostcodes: postcode.statePostcodes,
    cityPostcodes: postcode.cityPostcodes,
    districtPostcodes: postcode.districtPostcodes,
};
