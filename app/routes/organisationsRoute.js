const express = require('express');
const {createOrganisation} = require('../controllers/organisationsGenerator');
const router = express.Router();
const { getAllOrganisations } = require('../repos/OrganisationsRepo');

router.post('/', async function(req, res, next) {
  const quantity =req?.body?.quantity || 0
  console.log(quantity)
  await createOrganisation(quantity);
  res.send({completed: true});
})

router.get('/', async function(req, res, next) {
  res.send(await getAllOrganisations());
})

module.exports = router;
