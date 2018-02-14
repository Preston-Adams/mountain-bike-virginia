const results = require('../../assets/results')
const expect = require('./global.spec').expect

describe('results.js and results.vue test', () => {
  it('should find and return the correct race', () => {
    const searchStr = 'Middle Mountain Momma 2017'
    const raceIdx = results.findRaceIndex(searchStr)

    expect(results.resultsData[raceIdx].race)
      .to.equal(searchStr)
  })

  it('should not find a race', () => {
    expect(results.findRaceIndex('Rotor Meltdown'))
      .to.be.undefined
  })

  it('should find a race regardless of capitalization', () => {
    expect(results.findRaceIndex('middle mountain momma 2017'))
      .not.to.be.undefined
  })
})
