const cannotFindPostcode = (countryCode, postcode) => {
    return Error(`Cannot find ${postcode} in ${countryCode}`);
}

const countryNotSupport = (countryCode) => {
    return Error(`Did not support ${countryCode}`);
}

const countryNotSupportState = (countryCode) => {
    return Error(`${countryCode} did not support state or province`);
}

const countryNotSupportCity = (countryCode) => {
    return Error(`${countryCode} did not support city`);
}

const countryNotSupportDistrict= (countryCode) => {
    return Error(`${countryCode} did not support district`);
}

module.exports = {
    cannotFindPostcode,
    countryNotSupport,
    countryNotSupportState,
    countryNotSupportCity,
    countryNotSupportDistrict,
}