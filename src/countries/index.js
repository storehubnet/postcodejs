const countriesFeature = require('./countriesFeature.json')

const postcodesMY = require('./MY');

module.exports = {
    features: countriesFeature,
    postcodes: {
        MY: postcodesMY
    }
}