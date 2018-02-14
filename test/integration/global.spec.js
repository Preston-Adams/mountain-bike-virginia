const selenium = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

let testUrl
if (process.env.NODE_ENV === 'production') {
  testUrl = 'http://bikeva.com/'
} else {
  testUrl = 'http://aws-website-mountainbikevirginia-sbin6-test.s3-website-us-east-1.amazonaws.com/'
}

const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}

describe('Mountain Bike Virginia integration tests', () => {
  let driver

  before(async () => {
    if (process.env.BROWSER === 'chrome') {
      driver = await new selenium.Builder()
        .withCapabilities(selenium.Capabilities.chrome())
        .build()
    } else if (process.env.BROWSER === 'safari') {
      driver = await new selenium.Builder()
        .withCapabilities(selenium.Capabilities.safari())
        .build()
    }
    await driver.get(testUrl)
    exports.testUrl = testUrl
    exports.expect = expect
    exports.driver = driver
  })

  beforeEach(async () => {
    await driver.sleep(5000)
  })

  // Hook tests in here
  // Component tests should come first to avoid safari issues

  importTest('./components/post-card.spec')
  importTest('./components/home.spec')
  importTest('./components/social-actions.spec')
  importTest('./routes.spec')
  importTest('./results.spec')
  importTest('./components/navigation.spec')

  after(() => {
    driver.quit()
  })
})
