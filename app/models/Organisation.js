const { fakerSV: faker } = require('@faker-js/faker');

const createOrganisationObject = () => {
  const foretagsNamn = faker.company.name()
  const foretagsOrgNr = faker.number.bigInt({
    min: 5000001145,
    max: 5900001145
  }).toString()
  const juridiskKod = faker.number.int({
    min: 1,
    max: 99
  })
  const vdNamn = faker.person.fullName()
  return {
    organisation: {
      orgNr: foretagsOrgNr,
      namn: foretagsNamn,
      juridiskForm: {
        kod: juridiskKod,
        beskrivning: "Aktiebolag"
      },
      registrerad: "2010-01-01",
      status: [],
      foretradare: [
        {
          organisationer: [
            {
              orgNr: foretagsOrgNr,
              namn: foretagsNamn,
              organisationsForm: {
                kod: "AB",
                beskrivning: "Aktiebolag"
              },
              lopNummer: 1,
              roller: [
                {
                  kod: "vd",
                  beskrivning: "Verkställande direktör",
                  bedomning: {
                    kod: "HAR_VASENTLIGT_INFLYTANDE",
                    beskrivning: "Har väsentligt inflytande"
                  }
                }
              ],
              status: []
            }
          ],
          identitet: {
            id: "9001032391",
            sekel: "19",
            beskrivning: "Personnummer",
            kod: "PERSONNUMMER"
          },
          namn: vdNamn,
          roller: [
            {
              kod: "vd",
              beskrivning: "Verkställande direktör",
              bedomning: {
                kod: "HAR_VASENTLIGT_INFLYTANDE",
                beskrivning: "Har väsentligt inflytande"
              }
            }
          ]
        }
      ],
      huvudman: [
        {
          organisationer: [
            {
              orgNr: foretagsOrgNr,
              namn: foretagsNamn,
              organisationsForm: {
                kod: "AB",
                beskrivning: "Aktiebolag"
              },
              lopNummer: 1,
              roller: [
                {
                  kod: "vd",
                  beskrivning: "Verkställande direktör",
                  bedomning: {
                    kod: "HAR_VASENTLIGT_INFLYTANDE",
                    beskrivning: "Har väsentligt inflytande"
                  }
                }
              ],
              status: []
            }
          ],
          identitet: {
            id: "9001032391",
            seke: "19",
            beskrivning: "Personnummer",
            kod: "PERSONNUMMER"
          },
          namn: vdNamn,
          medborgarskap: "Svensk",
          bosattningsland: "Sverige",
          omfattning: {
            kod: "5",
            beskrivning: "100%"
          },
          art: {
            kod: "32",
            beskrivning: "Dotterbolag"
          }
        }
      ],
      ekonomiskaResultat: [
        {
          nettoOmsattning: 154398000,
          arsresultat: 3446000,
          bokslutsperiod: "201812"
        }
      ]
    },
    skatt: {
      registreringar: [
        {
          typ: {
            kod: "ARBETSGIVARE",
            beskrivning: "arbetsgivare"
          },
          aktiv: false
        },
        {
          typ: {
            kod: "F_SKATT",
            beskrivning: "F-skatt"
          },
          aktiv: true
        },
        {
          typ: {
            kod: "MOMS",
            beskrivning: "moms"
          },
          aktiv: true
        }
      ]
    },
    risker: {
      anmarkningar: {
        anmarkningsMal: [],
        anmarkningsHistorik: []
      }
    },
    skulder: {
      kronofogdeMal: [],
      beslut: {
        utredningsrapporter: [],
        loneutmatningar: [],
        utmatningar: [],
        avrakningsbeslut: []
      },
      skuldsaneringsHistorik: []
    }
  }

}


module.exports = {
  createOrganisationObject
}
