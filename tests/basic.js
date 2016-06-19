module.exports = {
  beforeEach(browser) {
    browser
      .url('localhost:1337')
      .waitForElementVisible('.container', 1000)
  },

  'Header appears on homepage': browser => {
    browser
      .assert.containsText('header', 'DRAFTS')
      .end()
  },

  'Can start a draft': browser => {
    browser
      .setValue('#num-players', '08') // selecting '8' gives the '89' option
      .setValue('select', 'ORI')
      .click('button')
      .assert.urlContains('/#g/')
      .waitForElementVisible('.start-controls', 1000)
      .click('.ready input')
      .click('.start-controls button')
      .waitForElementVisible('.card', 1000)
      .perform((client, done) => {
        client.elements('css selector', '#players tbody tr', response => {
          client.assert.equal(response.value.length, 8)
          done()
        })
      })
      .end()
  }
}
