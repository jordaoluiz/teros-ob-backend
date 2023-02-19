const returnedKeys = require("../configs/constants");

const DataSanitizer = async (data) => {
    let newDataArray = [];

    for (const bank of data) {
        let objectSanitized = {
            organisationName: bank?.OrganisationName,
            status: bank?.Status,
            logoUrl: bank?.AuthorisationServers[0]?.CustomerFriendlyLogoUri,
            openIDDiscoveryDocument: bank?.AuthorisationServers[0]?.OpenIDDiscoveryDocument
        }

        newDataArray.push(objectSanitized);
    }

    return newDataArray;
}

module.exports = {
    DataSanitizer
}
