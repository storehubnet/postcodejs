const error = require('./error')
const postcodes = require('./countries').postcodes;
const supportedCountries = require('./countries').features;

const search = (countryCode, prefixPostcode) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (typeof prefixPostcode === 'number') {
        prefixPostcode = postcode.toString();
    }

    const theCountryPostcodeList = postcodes[countryCode];

    return Object.keys(theCountryPostcodeList)
        .filter(code => new RegExp(`^${prefixPostcode}`).test(code))
        .map(code => ({
            ...theCountryPostcodeList[code],
            postcode: code,
        }));
};

const postcode = (countryCode, postcode) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (typeof postcode == 'number') {
        postcode = postcode.toString();
    }

    if (!postcodes[countryCode][postcode]) {
        throw error.cannotFindPostcode(countryCode, postcode);
    }

    return postcodes[countryCode][postcode];
}

const statePostcodes = (countryCode, state) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].state) {
        throw error.countryNotSupportState(countryCode);
    }

    const statePostcodes = [];
    for (const postcode in postcodes[countryCode]) {
        if (postcodes[countryCode].hasOwnProperty(postcode)) {
            const postcodeInfo = postcodes[countryCode][postcode];
            if (postcodeInfo.state === state) {
                statePostcodes.push(postcode);
            }
        }
    }
    return statePostcodes;
}

const cityPostcodes = (countryCode, city) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].city) {
        throw error.countryNotSupportCity(countryCode);
    }

    const cityPostcodes = [];
    for (const postcode in postcodes[countryCode]) {
        if (postcodes[countryCode].hasOwnProperty(postcode)) {
            const postcodeInfo = postcodes[countryCode][postcode];
            if (postcodeInfo.city === city) {
                cityPostcodes.push(postcode);
            }
        }
    }
    return cityPostcodes;
}

const districtPostcodes = (countryCode, district) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].district) {
        throw error.countryNotSupportDistrict(countryCode);
    }

    const districtPostcodes = [];
    for (const postcode in postcodes[countryCode]) {
        if (postcodes[countryCode].hasOwnProperty(postcode)) {
            const postcodeInfo = postcodes[countryCode][postcode];
            if (postcodeInfo.district === district) {
                districtPostcodes.push(postcode);
            }
        }
    }
    return districtPostcodes;
}

module.exports = {
    search,
    postcode,
    statePostcodes,
    cityPostcodes,
    districtPostcodes,
}
