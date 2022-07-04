/*----- constants -----*/
const INITIAL_PROTAGONIST_HULL = 20;
const numberGen = (max, min) => Math.floor(Math.random() * (max - min) + min);
const numberGen2 = (max, min) =>((Math.random() * (max - min) + min) * 0.1).toFixed(2);
/*----- app's state (variables) -----*/
const protagonistShip = {
  name: "USS Esinator",
  hull: INITIAL_PROTAGONIST_HULL,
  firepower: 5,
  accuracy: 0.7
};

// note: there is only one alien ship here! your deliverable requires six alien ships
// hint: consider using a combination of looping and/or classes to generate multiple alien ships!
const alien1 = {
  name: "Alien Ship 1",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alien2 = {
  name: "Alien Ship 2",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alien3 = {
  name: "Alien Ship 3",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alien4 = {
  name: "Alien Ship 4",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alien5 = {
  name: "Alien Ship 5",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alien6 = {
  name: "Alien Ship 6",
  // note: these values are hard-coded! you will need to find a way to determine them randomly
  hull: numberGen(7, 3),
  firepower: numberGen(5, 2),
  accuracy: numberGen2(8, 6)
};
const alienArray=[alien1,alien2,alien3,alien4,alien5,alien6]
/*----- functions -----*/
function attack(attacker, target) {
  alert(`${attacker.name} is firing on ${target.name} 🧨`);
  if (Math.random() <= attacker.accuracy) {
    target.hull -= attacker.firepower;
    alert(
      `${attacker.name} has hit ${target.name}. ${target.name} hull now at ${
        target.hull < 0 ? 0 : target.hull
      }🚀`
    );
  } else {
    alert(`${attacker.name} missed! ❌`);
  }
}

function init() {
  // reset ship hull state variables (in order to play again)
  protagonistShip.hull = INITIAL_PROTAGONIST_HULL;
  alienArray[0].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[0]);
    // if the ship survives, it attacks you
    if (alienArray[0].hull > 0) {
      attack(alienArray[0], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
      const nextBattle = confirm("Would you like to move on?");
      if (nextBattle) {
        return init2();
      } else {
        alert("Thank you for playing my game");
        return;
      }
    }
  }
    alert("Game over. Humanity has lost it's last hope..");
  return;
}
function init2(){
  alienArray[1].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[1]);
    // if the ship survives, it attacks you
    if (alienArray[1].hull > 0) {
      attack(alienArray[1], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
      const nextBattle = confirm("Would you like to move on?");
      if (nextBattle) {
        return init3();
      } else {
        alert("Thank you for playing my game");
        return;
      }
    }
  }
  alert("Game over. Humanity has lost it's last hope..");
  return;
}
  function init3(){
  alienArray[2].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[2]);
    // if the ship survives, it attacks you
    if (alienArray[2].hull > 0) {
      attack(alienArray[2], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
      const nextBattle = confirm("Would you like to move on?");
      if (nextBattle) {
        return init4();
      } else {
        alert("Thank you for playing my game");
        return;
      }
    }
  }
  alert("Game over. Humanity has lost it's last hope..");
  return;
}
    function init4(){
  alienArray[3].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[3]);
    // if the ship survives, it attacks you
    if (alienArray[3].hull > 0) {
      attack(alienArray[3], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
      const nextBattle = confirm("Would you like to move on?");
      if (nextBattle) {
        return init5();
      } else {
        alert("Thank you for playing my game");
        return;
      }
    }
  }
  alert("Game over. Humanity has lost it's last hope..");
  return;
}
    function init5(){
  alienArray[4].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[4]);
    // if the ship survives, it attacks you
    if (alienArray[4].hull > 0) {
      attack(alienArray[4], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
      const nextBattle = confirm("Would you like to move on?");
      if (nextBattle) {
        return init6();
      } else {
        alert("Thank you for playing my game");
        return;
      }
    }
  }
  alert("Game over. Humanity has lost it's last hope..");
  return;
}
    function init6(){
  alienArray[5].hull = numberGen(7, 3);

  // game continues while protagonist ship is intact
  while (protagonistShip.hull > 0) {
    // you attack the first alien ship
    attack(protagonistShip, alienArray[5]);
    // if the ship survives, it attacks you
    if (alienArray[5].hull > 0) {
      attack(alienArray[5], protagonistShip);
    } else {
      // if you destroy the alien ship, you win
      alert("You have destroyed one of their ships");
  const playAgain = confirm("Would you like to play again?");
      if (playAgain) {
        return init();
    }
  }
}
  alert("Game over. Humanity has lost it's last hope..");
  return;
}

/*----- initialize game -----*/
const start = confirm("Would you like to play Space Battle?");
if (start) {
  init();
}
