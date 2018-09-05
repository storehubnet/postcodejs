const countriesFeature = require('./countriesFeature.json')

const postcodesMY = require('./MY');
const postcodesTH = require('./TH');

module.exports = {
    features: countriesFeature,
    postcodes: {
        MY: postcodesMY,
        TH: postcodesTH
    }
}