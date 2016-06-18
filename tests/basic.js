module.exports = {
  'Header appears on homepage': browser => {
    browser
      .url('localhost:1337')
      .waitForElementVisible('body', 1000)
      .assert.containsText('header', 'DRAFTS')
      .end()
  }
}
