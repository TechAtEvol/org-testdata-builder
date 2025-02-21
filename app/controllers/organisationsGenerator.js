const {createOrganisationObject} = require('../models/Organisation');
const {saveOrganisation} = require('../repos/OrganisationsRepo');
const createOrganisation = async (quantity = 1) => {
  const organisations = []
  let i = 0;
  while(i < quantity) {
    const builtOrg = createOrganisationObject()
    await saveOrganisation(builtOrg)
    i++
  }
}

module.exports = {
  createOrganisation
};
