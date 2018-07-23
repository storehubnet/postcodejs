const error = require('./error')
const postcodes = require('./countries').postcodes;
const supportedCountries = require('./countries').features;

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

const statePostcodes = (countryCode, state, hasInfo, infoIncludesArea) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].state) {
        throw error.countryNotSupportState(countryCode);
    }

    return postcodesByFilter(countryCode, `state`, state, hasInfo, infoIncludesArea);
}

const cityPostcodes = (countryCode, city, hasInfo, infoIncludesArea) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].city) {
        throw error.countryNotSupportCity(countryCode);
    }

    return postcodesByFilter(countryCode, `city`, city, hasInfo, infoIncludesArea);
}

const districtPostcodes = (countryCode, district, hasInfo, infoIncludesArea) => {
    if (!supportedCountries[countryCode]) {
        throw error.countryNotSupport(countryCode);
    }

    if (!supportedCountries[countryCode].district) {
        throw error.countryNotSupportDistrict(countryCode);
    }

    return postcodesByFilter(countryCode, `district`, district, hasInfo, infoIncludesArea);
}

function postcodesByFilter(countryCode, filterType, filter, hasInfo, infoIncludesArea) {
    const filteredPostcodes = [];
    for (const postcode in postcodes[countryCode]) {
        if (postcodes[countryCode].hasOwnProperty(postcode)) {
            const postcodeInfo = postcodes[countryCode][postcode];
            if (
                postcodeInfo[filterType] === filter || 
                (filter.length > 0 && filter.indexOf(postcodeInfo[filterType]) !== -1)
            ) {
                if (!infoIncludesArea) {
                    delete postcodeInfo.area;
                }
                if (hasInfo) {
                    filteredPostcodes.push({...postcodeInfo, ...{ postcode: postcode }});
                } else {
                    filteredPostcodes.push(postcode);
                }
            }
        }
    }
    return filteredPostcodes;
}

module.exports = {
    postcode,
    search,
    statePostcodes,
    cityPostcodes,
    districtPostcodes,
}
