/* eslint-disable no-console */
class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

module.exports = Dog
