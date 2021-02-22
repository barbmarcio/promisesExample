class Spaceship {
  constructor(name, batteryCap, batteryValue, shield) {
    this.name         = name
    this.batteryCap   = batteryCap
    this.batteryValue = batteryValue
    this.shield       = shield
  }

  batteryCalc() {
    return Number((this.batteryValue * 100) / this.batteryCap)
  }

  shieldTest() {
    return Number(this.shield * 2)
  }
}

export default Spaceship