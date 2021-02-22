import Spaceship from "./Spaceship"
import SpaceshipEngine from "./SpaceshipEngine"

let spaceshipSophia   = new SpaceshipEngine(new Spaceship("Sophia", 10, 7, 70))
let spaceshipAmsterda = new SpaceshipEngine(new Spaceship("Amsterdã", 14, 10, 40))
let spaceshipAna      = new SpaceshipEngine(new Spaceship("Estrela-Anã", 20, 15, 80))

spaceshipSophia.spaceshipStart()
spaceshipAmsterda.spaceshipStart()
spaceshipAna.spaceshipStart()

console.log(spaceshipSophia)
console.log(spaceshipAmsterda)
console.log(spaceshipAna)