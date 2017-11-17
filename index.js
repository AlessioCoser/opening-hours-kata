class OpeningHours {
  constructor (config = {}) {
    this.config = config
  }

  isOpenOn () {
    return false
  }
}

module.exports = OpeningHours