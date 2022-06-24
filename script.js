const numberGen = (max, min) => Math.floor(Math.random() * (max - min) + min);
const numberGen2 = (max, min) =>
  ((Math.random() * (max - min) + min) * 0.1).toFixed(2);
/*----- constants -----*/
const INITIAL_PROTAGONIST_HULL = 20;
const INITIAL_ALIEN_HULL = numberGen(7, 3);

const protagonistShip = {
  name: "USS Esinator",
  hull: INITIAL_PROTAGONIST_HULL,
  firepower: 5,
  accuracy: 0.7,
};

class enemyShip {
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
}
const alien1 = new enemyShip(
  `Alien Ship 1`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
const alien2 = new enemyShip(
  `Alien Ship 2`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
const alien3 = new enemyShip(
  `Alien Ship 3`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
const alien4 = new enemyShip(
  `Alien Ship 4`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
const alien5 = new enemyShip(
  `Alien Ship 5`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
const alien6 = new enemyShip(
  `Alien Ship 6`,
  numberGen(7, 3),
  numberGen(5, 2),
  numberGen2(8, 6)
);
let alienArry = [alien1, alien2, alien3, alien4, alien5, alien6];

/*----- functions -----*/
function attack(attacker, target) {
  alert(`${attacker.name} is firing on ${target.name} `);
  if (Math.random() <= attacker.accuracy) {
    target.hull -= attacker.firepower;
    alert(
      `${attacker.name} has hit ${target.name}. ${target.name} hull now at ${
        target.hull < 0 ? 0 : target.hull
      }🚀`
    );
  } else {
    alert(`${attacker.name} missed! `);
  }
}

function init() {
  protagonistShip.hull = INITIAL_PROTAGONIST_HULL;
  enemyShip.hull = enemyShip;
  while (protagonistShip.hull > 0) {
    attack(protagonistShip, enemyShip);
    if (enemyShip.hull > 0) {
      attack(enemyShip, protagonistShip);
    } else {
      alert("You have destroyed all alien ships! 🎉");
      const playAgain = confirm("Would you like to play again?");
      if (playAgain) {
        return init();
      } else {
        alert("Thank you for playing. Good bye! 👋");
        return;
      }
    }
  }

  alert("Game over. Your ship has been destroyed! 😭");
  return;
}

const start = confirm("Would you like to play Space Battle?");
if (start) {
  init();
}