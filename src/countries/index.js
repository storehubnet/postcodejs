const countriesFeature = require('./countriesFeature.json')

const postcodesMY = require('./MY');
const postcodesTH = require('./TH');
const postcodesPH = require('./PH');

module.exports = {
    features: countriesFeature,
    postcodes: {
        MY: postcodesMY,
        TH: postcodesTH,
        PH: postcodesPH
    }
}