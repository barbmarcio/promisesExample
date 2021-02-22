class SpaceshipEngine {
  constructor(spaceship) {
    this.spaceship = spaceship
  }

  spaceshipStart() {
    Promise.all(
      [this.verifyCharge(), this.verifyShield()]
    ).then(results => {
      this.shieldNormalization(results[1]
    ).then(normalizedValue => {
      this.spaceship.shield = normalizedValue
      console.log(`${this.spaceship.name} is ready to launch. ` +
                  `Current charge: ${results[0]}%. ` +
                  `Current defense: ${this.spaceship.shield}` ) })
    }).catch(error => {
      console.log(error)
    })
  }
   
  verifyCharge() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.batteryCalc()
      if (currentCharge >= 30)
        resolve(currentCharge)
      else
        reject(`${this.spaceship.name} is not ready to launch. The battery is ${currentCharge}%`)
    })
  }

  verifyShield() {
    return new Promise((resolve, reject) => {
      let currentShield = this.spaceship.shieldTest()
      if (currentShield >= 100)
        resolve(currentShield)
      else
        reject(`${this.spaceship.name} shield is too weak for this task.`)
    })
  }

  shieldNormalization(currentShield) {
    return new Promise((resolve, reject) => {
      let normalizedValue = currentShield * 0.70
      if (normalizedValue <= 120) {
        resolve(normalizedValue)}
      else
        reject(`${this.spaceship.name} normalized shield value is too weak`)
    })
  }
}

export default SpaceshipEngine