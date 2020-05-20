//const theStartContainer = document.querySelectorAll(".theStartContainer")[0];
//const theStart = document.querySelector("#theStart");
//const nextBtn = document.querySelector("#chooseCharBtn");
const board = document.querySelectorAll(".board")[0];
const body = document.querySelectorAll("body")[0];
const playerInfos = document.querySelector(".playerInfos");
const leftTime = document.querySelector(".leftTime");
const turnBtn = document.querySelector(".turnBtn");
const finishTurnBtn = document.querySelector(".finishTurnBtn");
const turnNr = document.querySelector(".turnNr");
const showStreetCard = document.querySelector(".showStreetCard");
const showChanceCard = document.querySelector(".showChanceCard");
const showBusCard = document.querySelector(".showBusCard");
const showServiceCard = document.querySelector(".showServiceCard");
const showPayCard = document.querySelector(".payForCard");
const chanceAction = document.querySelector(".chanceAction");
const chanceAction2 = document.querySelector(".chanceAction2");
const chanceButtons = document.querySelectorAll(".chanceButtons .button");

const buyCard = document.querySelectorAll(".buyCard");
const dontBuy = document.querySelectorAll(".dontBuy");
const quitCard = document.querySelectorAll(".quitCard");
const build = document.querySelector(".build");
const payCard = document.querySelector(".payCard");
const payCardText = document.querySelector(".payCardText");
const payCardOwner = document.querySelector(".payCardOwner");
const payCardName = document.querySelector(".payCardName");
const payCardBtn = document.querySelector(".payCardBtn");

const firstDice = document.querySelector(".firstDice");
const secondDice = document.querySelector(".secondDice");
const buyOrNo = document.querySelector(".buyOrNo");
const streetCardFunctions = document.querySelector(".streetCardFunctions");
const busCardFunctions = document.querySelector(".busCardFunctions");
const serviceCardFunctions = document.querySelector(".serviceCardFunctions");
const houseNr = document.querySelector(".houseNr");
const hotelNr = document.querySelector(".hotelNr");
const bottom = document.querySelector(".bottom");
const characters = [
  "Katė",
  "Laivas",
  "Kepurė",
  "Dinozauras",
  "Automobilis",
  "Pingvinas",
];
const streets = [
  {
    name: "Respublikos<br/>gatvė",
    color: "#955436",
    price: 60,
    rent: [2, 4, 10, 30, 90, 160, 250],
    houses: 0,
    houseCost: 50,
    owned: "",
    id: {
      idColor: "brown",
      idNr: 1,
      idMax: 2,
    },
    coordinates: {
      x: -100,
      y: 0,
    },
  },
  {
    name: "Liaudies<br/>gatvė",
    color: "#955436",
    price: 60,
    rent: [4, 8, 20, 60, 180, 320, 450],
    houses: 0,
    houseCost: 50,
    owned: "",
    id: {
      idColor: "brown",
      idNr: 2,
      idMax: 2,
    },
    coordinates: {
      x: -300,
      y: 0,
    },
  },
  {
    name: "Jaunatvės<br/>gatvė",
    color: "#aae0fa",
    price: 100,
    rent: [6, 12, 30, 90, 270, 400, 550],
    houses: 0,
    houseCost: 50,
    owned: "",
    id: {
      idColor: "lightBlue",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -600,
      y: 0,
    },
  },
  {
    name: "Ramybės<br/>gatvė",
    color: "#aae0fa",
    price: 100,
    rent: [6, 12, 30, 90, 270, 400, 550],
    houses: 0,
    houseCost: 50,
    owned: "",
    id: {
      idColor: "lightBlue",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -800,
      y: 0,
    },
  },
  {
    name: "Centras",
    color: "#aae0fa",
    price: 120,
    rent: [8, 16, 40, 100, 300, 450, 600],
    houses: 0,
    houseCost: 50,
    owned: "",
    id: {
      idColor: "lightBlue",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -900,
      y: 0,
    },
  },
  {
    name: "Žemaitės<br/>gatvė",
    color: "#d93a96",
    price: 140,
    rent: [10, 20, 50, 150, 450, 625, 750],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "purple",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -30,
    },
  },
  {
    name: "Kolegija",
    color: "#d93a96",
    price: 140,
    rent: [10, 20, 50, 150, 450, 625, 750],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "purple",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -230,
    },
  },
  {
    name: "Stadionas",
    color: "#d93a96",
    price: 160,
    rent: [12, 24, 60, 180, 500, 700, 900],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "purple",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -330,
    },
  },
  {
    name: "AB<br/>Lifosa",
    color: "#f7941d",
    price: 180,
    rent: [14, 28, 70, 200, 550, 750, 950],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "orange",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -530,
    },
  },
  {
    name: "UAB<br/>Laumetris",
    color: "#f7941d",
    price: 180,
    rent: [14, 28, 70, 200, 550, 750, 950],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "orange",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -730,
    },
  },
  {
    name: "UAB<br/>Rivona",
    color: "#f7941d",
    price: 200,
    rent: [16, 32, 80, 220, 600, 800, 1000],
    houses: 0,
    houseCost: 100,
    owned: "",
    id: {
      idColor: "orange",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -1000,
      y: -830,
    },
  },
  {
    name: "UAB<br/>Krekenava",
    color: "#ed1b24",
    price: 220,
    rent: [18, 36, 90, 250, 700, 875, 1050],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "red",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -970,
      y: -992,
    },
  },
  {
    name: "UAB<br/>Konservai",
    color: "#ed1b24",
    price: 220,
    rent: [18, 36, 90, 250, 700, 875, 1050],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "red",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -770,
      y: -992,
    },
  },
  {
    name: "DADU<br/>Ledai",
    color: "#ed1b24",
    price: 240,
    rent: [20, 40, 100, 300, 750, 925, 1100],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "red",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -670,
      y: -992,
    },
  },
  {
    name: "UAB<br/>Vikonda",
    color: "#fef200",
    price: 260,
    rent: [22, 44, 110, 330, 800, 975, 1150],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "yellow",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -470,
      y: -992,
    },
  },
  {
    name: "Rinkos<br/>Aikštė",
    color: "#fef200",
    price: 260,
    rent: [22, 44, 110, 330, 800, 975, 1150],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "yellow",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -370,
      y: -992,
    },
  },
  {
    name: "UAB<br/>Rigveda",
    color: "#fef200",
    price: 280,
    rent: [24, 48, 120, 360, 850, 1025, 1200],
    houses: 0,
    houseCost: 150,
    owned: "",
    id: {
      idColor: "yellow",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -170,
      y: -992,
    },
  },
  {
    name: "MAXIMA X",
    color: "#1fb25a",
    price: 300,
    rent: [26, 52, 130, 390, 900, 1100, 1275],
    houses: 0,
    houseCost: 200,
    owned: "",
    id: {
      idColor: "green",
      idNr: 1,
      idMax: 3,
    },
    coordinates: {
      x: -70,
      y: -900,
    },
  },
  {
    name: "MAXIMA XX",
    color: "#1fb25a",
    price: 300,
    rent: [26, 52, 130, 390, 900, 1100, 1275],
    houses: 0,
    houseCost: 200,
    owned: "",
    id: {
      idColor: "green",
      idNr: 2,
      idMax: 3,
    },
    coordinates: {
      x: -70,
      y: -800,
    },
  },
  {
    name: "MAXIMA XXX",
    color: "#1fb25a",
    price: 320,
    rent: [28, 56, 150, 450, 1000, 1200, 1400],
    houses: 0,
    houseCost: 200,
    owned: "",
    id: {
      idColor: "green",
      idNr: 3,
      idMax: 3,
    },
    coordinates: {
      x: -70,
      y: -600,
    },
  },
  {
    name: "Stepono K.<br/>gatvė",
    color: "#0072bb",
    price: 350,
    rent: [35, 70, 175, 500, 1100, 1300, 1500],
    houses: 0,
    houseCost: 200,
    owned: "",
    id: {
      idColor: "blue",
      idNr: 1,
      idMax: 2,
    },
    coordinates: {
      x: -70,
      y: -300,
    },
  },
  {
    name: "Babėnai",
    color: "#0072bb",
    price: 400,
    rent: [50, 100, 200, 600, 1400, 1700, 2000],
    houses: 0,
    houseCost: 200,
    owned: "",
    id: {
      idColor: "blue",
      idNr: 2,
      idMax: 2,
    },
    coordinates: {
      x: -70,
      y: -100,
    },
  },
];
const chances = [
  {
    title: `Eikite į laukelį EIK<br/>
    ir gaukite 200 $.`,
  },
  {
    title: `Sumokėkite 50 $<br/>
    už savaitgalį 5<br/>
    žvaigždučių viešbutyje.`,
  },
  {
    title: `Pasikviečiate įžymius<br/>dizainerius, kad pakeistų<br/>
    jūsų namų interjerą.<br/>Už kiekvieną namą sumokėkite<br/>po 25 $,
    o už kiekvieną viešbutį po 100 $.`,
  },
  {
    title: `Gaunate baudą už tai, kad<br/>
    perėjoje nepraleidote pėsčiųjų.<br/>
    Sumokėkite 50 $`,
  },
  {
    title: `Nesumokėjote mokesčių valstybei.<br/>
    Eikite tiesiai į kalėjimą. Negaunate 200 $.`,
  },
  {
    title: `Einate pasivaiksčioti į.<br/>
    Respublikos gatvę`,
  },
  {
    title: `Pelningai parduodate<br/>
    savo akcijas.<br/>
    Gaunate 150 $.`,
  },
  {
    title: `Jūsų kolegos išsinuomoja<br/>
    jūsų vilą, esančią pajūryje.<br/>
    Gaunte po 10 $ iš kiekvieno<br/>
    žaidėjo.`,
  },
  {
    title: `Piko valandos spūstis!<br/>
    Grįžkite per tris langelius atgal.`,
  },
  {
    title: `Laimėjote tv realybės šou.<br/>
    Gaunte 10 $.`,
  },
  {
    title: `Aukcione parduodate<br/>
    senovinį paveikslą.<br/>
    Gaunate 50 $.`,
  },
  {
    title: `Sumokėkite 10 $ baudą<br/>
    arba paimkite ŠANSĄ.`,
  },
  {
    title: `Savo name įsirengiate<br/>
    prabangų baseiną.<br/>
    Sumokėkite 20 $.`,
  },
  {
    title: `Gaunte 25 $ išmoką iš<br/>
    draudimo bendrovės už<br/>
    automobilio avariją.`,
  },
  {
    title: `Laimite aukso puodą!<br/>
    Gaunate 100 $.`,
  },
  {
    title: `Eikite į laukelį EIK.`,
  },
  {
    title: `Padidėja nekilnojamojo<br/>
    turto mokesčiai.<br/>
    Sumokėkite po 40 $ už namus<br/>
    ir po 115 $ už viešbučius.`,
  },
  {
    title: `Nemokamas išėjimas iš kalėjimo.<br/>
    Šią kortelę galima pasilikti.`,
  },
  {
    title: `Nusprendžiate nusipirkti akcijų.<br/>
    Eikite į laukelį Babėnai.`,
  },
  {
    title: `Jums grąžinami mokesčiai.<br/>
    Gaunte 50 $.`,
  },
  {
    title: `Išvykstate į ekskursiją.<br/>
    Eikite į laukelį DADU Ledai.
    Jeigu praeinate EIK laukelį,
    gaunate 200 $.`,
  },
  {
    title: `Parduodate savo seną<br/>
    mašiną. Gaunte 20 $.`,
  },
  {
    title: `Gaunate baudą už tai, kad<br/>
    vairuodamas kalbėjote
    mobiliuoju telefonu.
    Sumokėkite 15 $.`,
  },
  {
    title: `Paveldite 300 $, bet turite<br/>
    susimokėti didelius mokesčius.<br/>
    Gaunte 100 $.`,
  },
  {
    title: `Iškeliaujate. Eikite į artimiausia<br/>
    autobusų stotį. Jei praeinate EIK,
    gaunate 200 $.`,
  },
  {
    title: `Gaunate 100 $, pelną už savo<br/>
    privataus lėktuvo nuomą.`,
  },
  {
    title: `Eikite į Respublikos gatvę.<br/>
    Jei praeinate EIK laukelį,
    gaunate 200 $.`,
  },
  {
    title: `Jūsų internetinė kompanija<br/>
    klesti. Gaunte 200 $`,
  },
  {
    title: `Nemokamas išėjimas iš kalėjimo.<br/>
    Šią kortelę galima pasilikti.`,
  },
  {
    title: `Privačiam vakarėliui<br/>
    išsinuomojate didelę garso<br/>
    aparatūra. Sumokėkite 100 $`,
  },
  {
    title: `Jūs sulaikomas dėl tapatybės<br/>
    dokumentų klastojimo.<br/>
    Eikite tiesiai į kalėjimą bei
    negaunte 200 $.`,
  },
];
const busRents = [25, 50, 100, 200];
const busPrice = 200;
const buses = [{ owned: "" }, { owned: "" }, { owned: "" }, { owned: "" }];
const payTaxes = [
  {
    price: 200,
    name1: "Pajamų",
    name2: "Mokestis",
  },
  {
    price: 100,
    name1: "Nupirkai",
    name2: "žiedą",
  },
];
const services = [
  {
    name: "Elektros<br/>Tinklai",
    owned: "",
  },
  {
    name: "Geriamas<br/>Vanduo",
    owned: "",
  },
];
let houses = 32;
let hotels = 12;

const servicesPrice = 150;
let timesToMove = 2;
let xMove,
  yMove = 0;
let selectedChars = ["1", "2"];
let timeleft = 100;
let players = [];
let turns = 1;
let playerIndex = 0;
let stopTime = false;
let dice1,
  dice2 = null;
let streetIndex = null;
let busIndex = null;
let isChance = false;
let taxesIndex = null;
let goToJail = false;
let servicesIndex = null;
let currentCard = null;
let howMuchToPay = 0;
let chanceRandom = null;
let rolling = null;
let giveStartMoney = true;
for (let t = 0; t < selectedChars.length; t++) {
  let playerInfo = {
    playerChar: selectedChars[t],
    money: 1500,
    inPrison: 0,
    position: {
      x: 0,
      y: 0,
      number: 0,
    },
  };
  players.push(playerInfo);
}

turnBtn.addEventListener("click", playerTurn);

finishTurnBtn.addEventListener("click", finishTurn);

function playerTurn() {
  stopTime = false;

  finishTurnBtn.style.display = "block";
  turnBtn.style.display = "none";
  rolling = 5;
  xMove = players[playerIndex].position.x;
  yMove = players[playerIndex].position.y;
  // timesToMove = 10;
  moving();
  // rollDice();
}

function finishTurn() {
  finishTurnBtn.style.display = "none";
  turnBtn.style.display = "block";
  buyOrNo.style.display = "none";
  streetCardFunctions.style.display = "none";
  busCardFunctions.style.display = "none";
  serviceCardFunctions.style.display = "none";
  giveStartMoney = true;
  if (players.length != turns) turns++;
  else turns = 1;
  timeleft = 100;
  playerIndex = turns - 1;
  bottom.style.pointerEvents = "initial";
  turnNr.textContent = turns + " žaidėjo eilė";
  leftTime.style.display = "none";
  stopTime = true;
  // turnBtn.classList.add("cantTurn");
  // setTimeout(playerCanTurn, 1000);
}
function playerCanTurn() {
  turnBtn.classList.remove("cantTurn");
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  switch (dice1) {
    case 1:
      firstDice.querySelector(".diceNr").src = "images/dice1.png";
      break;
    case 2:
      firstDice.querySelector(".diceNr").src = "images/dice2.png";
      break;
    case 3:
      firstDice.querySelector(".diceNr").src = "images/dice3.png";
      break;
    case 4:
      firstDice.querySelector(".diceNr").src = "images/dice4.png";
      break;
    case 5:
      firstDice.querySelector(".diceNr").src = "images/dice5.png";
      break;
    case 6:
      firstDice.querySelector(".diceNr").src = "images/dice6.png";
      break;
  }
  switch (dice2) {
    case 1:
      secondDice.querySelector(".diceNr").src = "images/dice1.png";
      break;
    case 2:
      secondDice.querySelector(".diceNr").src = "images/dice2.png";
      break;
    case 3:
      secondDice.querySelector(".diceNr").src = "images/dice3.png";
      break;
    case 4:
      secondDice.querySelector(".diceNr").src = "images/dice4.png";
      break;
    case 5:
      secondDice.querySelector(".diceNr").src = "images/dice5.png";
      break;
    case 6:
      secondDice.querySelector(".diceNr").src = "images/dice6.png";
      break;
  }
  rolling--;

  if (rolling > 0) {
    setTimeout(rollDice, 500);
  } else {
    let allDices = dice1 + dice2;

    timesToMove = allDices;
    setTimeout(moving, 1000);
  }
}
function moving() {
  const movingPlayer = document.querySelector(".player" + turns);
  bottom.style.pointerEvents = "none";
  if (timesToMove > 0) {
    if (xMove != -1000 && yMove == 0) xMove += -100;
    else if (xMove == -1000 && yMove != -1000) yMove += -100;
    else if (yMove == -1000 && xMove != 0) xMove += 100;
    else yMove += 100;
    timesToMove--;
    players[playerIndex].position.number++;
    if (players[playerIndex].position.number == 40) {
      players[playerIndex].position.number = 0;

      if (giveStartMoney) players[playerIndex].money += 200;
      updateInfo();
    }
    movingPlayer.style.cssText = `transform: translate(${xMove}px, ${yMove}px)`;
    players[playerIndex].position.x = xMove;
    players[playerIndex].position.y = yMove;
    setTimeout(moving, 100);
  } else if (timesToMove < 0) {
    if (xMove != 0 && yMove == 0) xMove += 100;
    else if (xMove == -1000 && yMove != 0) yMove += 100;
    else if (yMove == -1000 && xMove != -1000) xMove += -100;
    else yMove += -100;
    timesToMove++;
    players[playerIndex].position.number--;
    if (players[playerIndex].position.number == 40) {
      players[playerIndex].position.number = 0;

      if (giveStartMoney) players[playerIndex].money += 200;
      updateInfo();
    }
    movingPlayer.style.cssText = `transform: translate(${xMove}px, ${yMove}px)`;
    players[playerIndex].position.x = xMove;
    players[playerIndex].position.y = yMove;
    setTimeout(moving, 100);
  } else {
    if (players[playerIndex].inPrison == 0) {
      timing();
      leftTime.style.display = "block";
      showCard();
    } else {
      finishTurn();
    }
  }
}
function timing() {
  if (stopTime == false) {
    leftTime.textContent = `Liko ${timeleft--} sekundžių`;
    if (timeleft > -1) setTimeout(timing, 1000);
    else finishTurn();
  }
}
function showCard() {
  const charPosition = players[playerIndex].position.number;

  streetIndex = null;
  isChance = false;
  busIndex = null;
  taxesIndex = null;
  goToJail = false;
  servicesIndex = null;
  buyOrNo.style.display = "block";

  switch (charPosition) {
    case 5:
      busIndex = 0;
      break;
    case 15:
      busIndex++;
      break;
    case 25:
      busIndex += 2;
      break;
    case 35:
      busIndex += 3;
      break;
    case 1:
      streetIndex = 0;
      break;
    case 3:
      streetIndex++;
      break;
    case 4:
      taxesIndex = 0;
      break;
    case 6:
      streetIndex += 2;
      break;
    case 2:
    case 7:
    case 17:
    case 22:
    case 33:
    case 36:
      isChance = true;
      break;
    case 8:
      streetIndex += 3;
      break;
    case 9:
      streetIndex += 4;
      break;
    case 11:
      streetIndex += 5;
      break;
    case 12:
      servicesIndex = 0;
      break;
    case 13:
      streetIndex += 6;
      break;
    case 14:
      streetIndex += 7;
      break;
    case 16:
      streetIndex += 8;
      break;
    case 18:
      streetIndex += 9;
      break;
    case 19:
      streetIndex += 10;
      break;
    case 21:
      streetIndex += 11;
      break;
    case 23:
      streetIndex += 12;
      break;
    case 24:
      streetIndex += 13;
      break;
    case 26:
      streetIndex += 14;
      break;
    case 27:
      streetIndex += 15;
    case 28:
      servicesIndex++;
      break;
    case 29:
      streetIndex += 16;
      break;
    case 30:
      goToJail = true;
      break;
    case 31:
      streetIndex += 17;
      break;
    case 32:
      streetIndex += 18;
      break;
    case 34:
      streetIndex += 19;
      break;
    case 37:
      streetIndex += 20;
      break;
    case 38:
      taxesIndex = 1;
      break;
    case 39:
      streetIndex += 21;
      break;
  }

  if (streetIndex != null && streets[streetIndex].owned == "") {
    streetCard(streetIndex);
  } else if (isChance) {
    chanceCard();
  } else if (
    streetIndex != null &&
    streets[streetIndex].owned != "" &&
    streets[streetIndex].owned != players[playerIndex].playerChar
  )
    payForCard("street");
  else if (busIndex != null && buses[busIndex].owned == "") busCard();
  else if (
    busIndex != null &&
    buses[busIndex].owned != "" &&
    buses[busIndex].owned != players[playerIndex].playerChar
  )
    payForCard("bus");
  else if (taxesIndex != null) payForCard("tax");
  else if (goToJail) {
    timesToMove = 20;
    setTimeout(moving, 1000);
  } else if (servicesIndex != null && services[servicesIndex].owned == "")
    servicesCard();
  else if (
    servicesIndex != null &&
    services[servicesIndex].owned != "" &&
    services[servicesIndex].owned != players[playerIndex].playerChar
  )
    payForCard("service");
  else bottom.style.pointerEvents = "initial";
}
function servicesCard() {
  const cardName = document.querySelector(".showServiceCard .cardName");
  const cardPrice = document.querySelector(".showServiceCard .cardPrice");
  cardName.innerHTML = services[servicesIndex].name;
  cardPrice.innerHTML = `${servicesPrice} $`;
  showServiceCard.style.display = "block";
}

for (let i = 0; i < buyCard.length; i++) {
  buyCard[i].addEventListener("click", () => {
    const cards = document.querySelectorAll(".playerCards")[playerIndex];
    const card = document.createElement("div");
    card.classList.add("playerCard");

    cards.insertBefore(card, cards.children[0]);
    const cardColor = document.createElement("div");
    cardColor.classList.add("cardColor");

    if (streetIndex != null) {
      card.setAttribute("data-street", `${streetIndex}`);
      card.onclick = function (e) {
        currentCard = e.target.getAttribute("data-street");
        streetCardFunctions.style.display = "block";

        streetCard(e.target.getAttribute("data-street"));
      };
      cardColor.classList.add(`card-${streets[streetIndex].id.idColor}`);

      players[playerIndex].money -= streets[streetIndex].price;
      streets[streetIndex].owned = players[playerIndex].playerChar;
      showStreetCard.style.display = "none";
    } else if (busIndex != null) {
      card.setAttribute("data-bus", `${busIndex}`);

      const cardImg = document.createElement("img");
      cardImg.classList.add("cardImg");
      cardImg.src = "images/bus.png";

      cardImg.style.cssText = "width:20px; margin-top:5px";

      card.appendChild(cardImg);

      card.onclick = function (e) {
        currentCard = e.target.getAttribute("data-bus");
        buyOrNo.style.display = "none";
        busCardFunctions.style.display = "block";
        busCard();
      };

      players[playerIndex].money -= busPrice;
      buses[busIndex].owned = players[playerIndex].playerChar;
      showBusCard.style.display = "none";
    } else if (servicesIndex != null) {
      card.setAttribute("data-service", `${servicesIndex}`);

      const cardImg = document.createElement("img");
      cardImg.classList.add("cardImg");
      if (servicesIndex == 0) cardImg.src = "images/bulb.gif";
      else cardImg.src = "images/water.png";

      cardImg.style.cssText = "width:20px; margin-top:5px";

      //   cardImg.style.width = "30px";

      card.appendChild(cardImg);
      card.onclick = function (e) {
        currentCard = e.target.getAttribute("data-service");
        buyOrNo.style.display = "none";
        serviceCardFunctions.style.display = "block";
        servicesCard();
      };

      players[playerIndex].money -= servicesPrice;
      services[servicesIndex].owned = players[playerIndex].playerChar;
      showServiceCard.style.display = "none";
    }

    bottom.style.pointerEvents = "initial";
    card.appendChild(cardColor);
    card.insertBefore(cardColor, card.children[0]);
    updateInfo();
  });
}
for (let i = 0; i < dontBuy.length; i++) {
  dontBuy[i].addEventListener("click", () => {
    showStreetCard.style.display = "none";
    bottom.style.pointerEvents = "initial";
    showBusCard.style.display = "none";
    showServiceCard.style.display = "none";
  });
}
for (let i = 0; i < quitCard.length; i++) {
  quitCard[i].addEventListener("click", () => {
    showStreetCard.style.display = "none";
    showBusCard.style.display = "none";
    bottom.style.pointerEvents = "initial";
    showServiceCard.style.display = "none";
  });
}

build.addEventListener("click", () => {
  let maxNr = streets[currentCard].id.idMax;
  let howMuchCards = 0;
  let theStreet = streets[currentCard].id.idColor;
  let hasAllCards = false;
  for (let i = 0; i < streets.length; i++)
    if (
      streets[i].id.idColor == theStreet &&
      streets[i].owned == players[playerIndex].playerChar
    )
      howMuchCards++;

  if (maxNr == howMuchCards) hasAllCards = true;

  if (streets[currentCard].houses <= 4 && hasAllCards) {
    if (houses > 0 || hotels > 0) {
      let movingX = streets[currentCard].coordinates.x;
      let movingY = streets[currentCard].coordinates.y;
      const onBoardHouse = document.createElement("img");
      onBoardHouse.className = `boardHouse ${streets[currentCard].id.idColor}-${streets[currentCard].id.idNr}`;

      if (streets[currentCard].houses < 4 && houses > 0) {
        let thePrice = streets[currentCard].houseCost;
        players[playerIndex].money -= thePrice;

        let moveMore = 0;
        if (streets[currentCard].coordinates.y == 0) {
          if (streets[currentCard].houses == 1) moveMore = -23;
          else if (streets[currentCard].houses == 2) moveMore = -23 * 2;
          else if (streets[currentCard].houses == 3) moveMore = -23 * 3;
          movingX += moveMore;
        } else if (streets[currentCard].coordinates.x == -1000) {
          if (streets[currentCard].houses == 1) moveMore = -23;
          else if (streets[currentCard].houses == 2) moveMore = -23 * 2;
          else if (streets[currentCard].houses == 3) moveMore = -23 * 3;
          movingY += moveMore;
        } else if (streets[currentCard].coordinates.y == -992) {
          if (streets[currentCard].houses == 1) moveMore = 23;
          else if (streets[currentCard].houses == 2) moveMore = 23 * 2;
          else if (streets[currentCard].houses == 3) moveMore = 23 * 3;
          movingX += moveMore;
        } else if (streets[currentCard].coordinates.x == -70) {
          if (streets[currentCard].houses == 1) moveMore = 23;
          else if (streets[currentCard].houses == 2) moveMore = 23 * 2;
          else if (streets[currentCard].houses == 3) moveMore = 23 * 3;
          movingY += moveMore;
        }

        streets[currentCard].houses++;
        onBoardHouse.src = "images/smallHouse.png";

        board.appendChild(onBoardHouse);

        houses--;
      } else if (streets[currentCard].houses == 4 && hotels > 0) {
        let thePrice = streets[currentCard].houseCost;
        players[playerIndex].money -= thePrice;

        const removingHouse = document.querySelectorAll(
          `.${streets[currentCard].id.idColor}-${streets[currentCard].id.idNr}`
        );
        removingHouse.forEach((el) => {
          el.remove();
        });

        houses += 4;
        hotels--;
        streets[currentCard].houses++;
        onBoardHouse.src = "images/smallHotel.png";
        board.appendChild(onBoardHouse);
      }
      if (
        streets[currentCard].coordinates.x == -70 ||
        streets[currentCard].coordinates.x == -1000
      )
        onBoardHouse.style.cssText = `transform:translate(${movingX}px, ${movingY}px) rotate(90deg)`;
      else
        onBoardHouse.style.cssText = `transform:translate(${movingX}px, ${movingY}px)`;
      updateInfo();
    }
  }
});
function busCard() {
  const cardName = document.querySelector(".showBusCard .cardName");
  const rentPrice = document.querySelectorAll(".showBusCard .rentPrice");
  const cardPrice = document.querySelector(".showBusCard .cardPrice");

  cardName.innerHTML = "Lietuvos<br/>Autobusai";

  for (let i = 0; i < rentPrice.length; i++)
    rentPrice[i].innerHTML = `${busRents[i]} $`;

  cardPrice.innerHTML = `${busPrice} $`;
  showBusCard.style.display = "block";
  buyOrNo.style.display = "block";
}
function payForCard(box) {
  showPayCard.style.display = "block";
  bottom.style.pointerEvents = "none";
  if (box == "street") {
    let streetColor = streets[streetIndex].id.idColor;
    let maxStreetsThisColor = streets[streetIndex].id.idMax;
    let howManySameColor = 0;
    let whoOwns = streets[streetIndex].owned;

    for (let i = 0; i < streets.length; i++) {
      if (streets[i].id.idColor == streetColor && streets[i].owned == whoOwns)
        howManySameColor++;
    }

    if (maxStreetsThisColor > howManySameColor)
      howMuchToPay = streets[streetIndex].rent[0];
    else if (
      maxStreetsThisColor == howManySameColor &&
      streets[streetIndex].houses == 0
    )
      howMuchToPay = streets[streetIndex].rent[1];
    else
      howMuchToPay = streets[streetIndex].rent[streets[streetIndex].houses + 1];

    payCardOwner.textContent = `${streets[streetIndex].owned} žaidėjo nuosavybė`;
    payCardName.innerHTML = streets[streetIndex].name;
    payCardText.style.background = streets[streetIndex].color;
    payCard.textContent = `${howMuchToPay} $`;
  } else if (box == "bus") {
    let howManySameColor = 0;
    let whoOwns = buses[busIndex].owned;

    for (let i = 0; i < buses.length; i++) {
      if (buses[i].owned == whoOwns) howManySameColor++;
    }
    howMuchToPay = busRents[howManySameColor - 1];
    payCardOwner.textContent = `${buses[busIndex].owned} žaidėjo nuosavybė`;
    payCardName.innerHTML = "Lietuvos Autobusai";
    payCard.textContent = `${howMuchToPay} $`;
  } else if (box == "tax") {
    howMuchToPay = payTaxes[taxesIndex].price;
    payCardOwner.textContent = `${payTaxes[taxesIndex].name1}`;
    payCardName.innerHTML = `${payTaxes[taxesIndex].name2}`;
    payCard.textContent = `${howMuchToPay} $`;
  } else if (box == "service") {
    let whoOwns = services[servicesIndex].owned;
    let howMany = 0;

    for (let i = 0; i < services.length; i++)
      if (services[i].owned == whoOwns) howMany++;

    if (howMany == "1") howMuchToPay = 12 * 4;
    else howMuchToPay = 12 * 10;

    payCardOwner.textContent = `${services[servicesIndex].owned} žaidėjo nuosavybė`;
    payCardName.innerHTML = services[servicesIndex].name;
    payCard.textContent = `${howMuchToPay} $`;
  }
}

payCardBtn.addEventListener("click", () => {
  showPayCard.style.display = "none";
  players[playerIndex].money -= howMuchToPay;
  updateInfo();
});

function streetCard(streetIndex) {
  const cardName = document.querySelector(".cardNameStreet");
  const rentPrice = document.querySelectorAll(".rentPriceStreet");
  const housePrice = document.querySelectorAll(".housePrice");
  const cardPrice = document.querySelector(".cardPriceStreet");

  cardName.innerHTML = streets[streetIndex].name;
  cardName.style.background = streets[streetIndex].color;

  for (let i = 0; i < rentPrice.length; i++)
    rentPrice[i].innerHTML = `${streets[streetIndex].rent[i]} $`;

  for (let i = 0; i < housePrice.length; i++)
    housePrice[i].innerHTML = `${streets[streetIndex].houseCost} $`;
  cardPrice.innerHTML = `${streets[streetIndex].price} $`;
  showStreetCard.style.display = "block";
}
let pay = 0;
function chanceCard() {
  if (chanceAction2.style.display == "block") {
    chanceAction2.style.display = "none";
    chanceButtons.forEach((el) => {
      el.style.cssText = "width: 100%; left: 0";
    });
  }
  showChanceCard.style.display = "block";
  let chanceCards = chances.length;
  chanceRandom = Math.floor(Math.random() * chanceCards);
  const chanceText = document.querySelector(".chanceText");
  chanceText.innerHTML = chances[4].title;
  pay = 0;
  switch (4) {
    case 0:
    case 4:
    case 5:
    case 15:
    case 18:
    case 20:
    case 24:
    case 26:
    case 30:
      chanceAction.innerHTML = "Eiti";
      break;
    case 1:
    case 3:
    case 12:
    case 22:
    case 29:
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 2: // Sumokaite uz namu po 25 o uz viesbucius po 100
      for (let i = 0; i < streets.length; i++) {
        if (streets[i].owned == players[playerIndex].playerChar)
          if (streets[i].houses != 0) {
            if (streets[i].houses <= 4) pay += streets[i].houses * 25;
            else pay += 100;
          }
      }
      chanceAction.innerHTML = `Sumokėti ${pay}`;
      break;
    case 6:
    case 7:
    case 9:
    case 10:
    case 13:
    case 14:
    case 17:
    case 19:
    case 21:
    case 23:
    case 25:
    case 27:
    case 28:
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 8: // Grizti 3 langelius atgal
      chanceAction.innerHTML = "Grįžti";
      break;
    case 11: // Sumoketi 10 arba paimti sansa
      chanceButtons.forEach((el) => {
        el.style.cssText = "width: 50%; left: initial";
      });
      chanceAction2.style.display = "block";
      chanceAction.innerHTML = "Sumokėti";
      chanceAction2.innerHTML = "Imti šansą";
      break;
    case 16: // Sumoketi 40 uz namus ir 115 uz viesbucius
      for (let i = 0; i < streets.length; i++) {
        if (streets[i].owned == players[playerIndex].playerChar)
          if (streets[i].houses != 0) {
            if (streets[i].houses <= 4) pay += streets[i].houses * 40;
            else pay += 115;
          }
      }
      chanceAction.innerHTML = `Sumokėti ${pay}`;
      break;
  }
}
chanceAction2.addEventListener("click", () => {
  switch (chanceRandom) {
    case 11:
      chanceCard();
      break;
  }
  bottom.style.pointerEvents = "initial";
});
chanceAction.addEventListener("click", () => {
  const movingPlayer = document.querySelector(".player" + turns);
  pay = 0;
  switch (4) {
    case 0: // Praeinate laukeli eik gaunate 200
      timesToMove = 40 - players[playerIndex].position.number;
      moving();
      break;
    case 1:
    case 3: // Sumokaite 50
      players[playerIndex].money -= 50;
      break;
    case 2: // Sumokaite uz namus po 25 o uz viesbucius po 100
      for (let i = 0; i < streets.length; i++) {
        if (streets[i].owned == players[playerIndex].playerChar)
          if (streets[i].houses != 0) {
            if (streets[i].houses <= 4) pay += streets[i].houses * 25;
            else pay += 100;
          }
      }
      players[playerIndex].money -= pay;
      break;
    case 4:
    case 30: // Eini i kalejima, negauni 200
      if (players[playerIndex].position.number <= 10)
        timesToMove = 10 - players[playerIndex].position.number;
      else {
        timesToMove = 40 - players[playerIndex].position.number + 10;
        giveStartMoney = false;
      }
      players[playerIndex].inPrison = 3;
      moving();
      break;
    case 5:
    case 26: // Eini i respublikos gatve
      timesToMove = 40 - players[playerIndex].position.number + 1;
      moving();
      break;
    case 6: // Gauni 150
      players[playerIndex].money += 150;
      break;
    case 7: // Gauni po 10 is kiekvieno
      players[playerIndex].money += (players.length - 1) * 10;
      break;
    case 8: // Grizti 3 langelius atgal
      timesToMove = -3;
      moving();
      break;
    case 9: // Gauni 10
      players[playerIndex].money += 10;
      break;
    case 10:
    case 19: // Gaunu 50
      players[playerIndex].money += 50;
      break;
    case 11: // Sumoketi 10 arba paimti sansa
      players[playerIndex].money -= 10;
      break;
    case 12: // Sumoketi 20
      players[playerIndex].money -= 20;
      break;
    case 13: // Gaunu 25
      players[playerIndex].money += 25;
      break;
    case 14:
    case 23:
    case 25: // Laimiu 100
      players[playerIndex].money += 100;
      break;
    case 15: // Praeinate laukeli eik gaunate 200
      timesToMove = 40 - players[playerIndex].position.number;
      moving();
      break;
    case 16: // Sumoketi 40 uz namus ir 115 uz viesbucius
      for (let i = 0; i < streets.length; i++) {
        if (streets[i].owned == players[playerIndex].playerChar)
          if (streets[i].houses != 0) {
            if (streets[i].houses <= 4) pay += streets[i].houses * 40;
            else pay += 115;
          }
      }
      players[playerIndex].money -= pay;
      break;
    case 17:
    case 28: // Nemokamas isejimas is kalejimo
      //chanceAction.innerHTML = "Eiti";
      break;
    case 18: // Eiti i paskutini langeli Babenai
      timesToMove = 39 - players[playerIndex].position.number;
      moving();
      break;

    case 20: // Eiti i DADU ledai langeli, jei praeinu EIK gaunu 200
      if (players[playerIndex].position.number < 24)
        timesToMove = 24 - players[playerIndex].position.number;
      else timesToMove = 40 - players[playerIndex].position.number + 24;
      moving();
      break;
    case 21: // Gauni 20
      players[playerIndex].money += 20;
      break;
    case 22: // Suomketi 15
      players[playerIndex].money -= 15;
      break;

    case 24: // Eiti i artimiausia autobusu stoti jei praeinu EIK gaunu 200
      const bus1 = 5 - players[playerIndex].position.number;
      const bus2 = 15 - players[playerIndex].position.number;
      const bus3 = 25 - players[playerIndex].position.number;
      if (players[playerIndex].position.number >= 35) {
        timesToMove = 40 - players[playerIndex].position.number + 5;
      } else {
        if (bus1 > 0) {
          timesToMove = 5 - players[playerIndex].position.number;
        } else if (bus2 > 0) {
          timesToMove = 15 - players[playerIndex].position.number;
        } else if (bus3 > 0) {
          timesToMove = 25 - players[playerIndex].position.number;
        } else {
          timesToMove = 35 - players[playerIndex].position.number;
        }
      }

      moving();
      break;
    case 27: // Gauni 200
      players[playerIndex].money += 200;
      break;
    case 29: // Sumoketi 100
      players[playerIndex].money -= 100;
      break;
  }
  showChanceCard.style.display = "none";
  bottom.style.pointerEvents = "initial";
  updateInfo();
});

function updateInfo() {
  houseNr.textContent = houses;
  hotelNr.textContent = hotels;
  const playersMoney = document.querySelectorAll(".playerMoney");
  for (let i = 0; i < players.length; i++) {
    playersMoney[i].textContent = players[i].money + " $";
  }
}

showPlayerInfo();
function showPlayerInfo() {
  for (let i = 0; i < players.length; i++) {
    const playerInfoCont = document.createElement("div");
    const playerInfo = document.createElement("div");
    const playerCards = document.createElement("div");
    playerInfoCont.classList.add("playerInfoCont");
    playerInfo.classList.add("playerInfo");
    playerCards.classList.add("playerCards");
    const createSymbol = document.createElement("img");
    let playerCharSymbol = null;

    switch (players[i].playerChar) {
      case "1":
        playerCharSymbol = "Katė";
        createSymbol.src = "images/cat.png";
        createSymbol.className += "player1 symbol";
        break;
      case "2":
        playerCharSymbol = "Laivas";
        createSymbol.src = "images/ship.png";
        createSymbol.className += "player2 symbol";
        break;
      case "3":
        playerCharSymbol = "Kepurė";
        createSymbol.src = "images/hat.png";
        createSymbol.className += "player3 symbol";
        break;
      case "4":
        playerCharSymbol = "Dinozauras";
        createSymbol.src = "images/dinosour.png";
        createSymbol.className += "player4 symbol";
        break;
      case "5":
        playerCharSymbol = "Automobilis";
        createSymbol.src = "images/car.png";
        createSymbol.className += "player5 symbol";
        break;
      case "6":
        playerCharSymbol = "Pingvinas";
        createSymbol.src = "images/pinguin.png";
        createSymbol.className += "player6 symbol";
        break;
    }
    playerInfo.innerHTML = `
    <h2 class="playerChar">${i + 1}. ${playerCharSymbol}</h2>
    <h2 class="playerMoney">${players[i].money} $</h2>
  `;
    playerInfoCont.appendChild(playerInfo);
    playerInfoCont.appendChild(playerCards);
    playerInfos.appendChild(playerInfoCont);
    board.appendChild(createSymbol);
  }
}

/*nextBtn.addEventListener("click", () => {
  const howManyPlayers = theStart.options[theStart.selectedIndex].value;
  const chooseSymbolText = theStartContainer.querySelectorAll("h3")[0];

  chooseSymbolText.classList.add("chooseSymbolText");
  chooseSymbolText.textContent = "Pasirinkite simbolį";

  nextBtn.style.display = "none";
  theStart.style.display = "none";
  const playerAndChar = document.createElement("div");
  playerAndChar.classList.add("playerAndChar");

  for (let i = 0; i < howManyPlayers; i++) {
    const selectContainer = document.createElement("div");
    selectContainer.classList.add("selectContainer");
    const newPlayer = document.createElement("h4");
    newPlayer.innerHTML = i + 1 + " žaidėjas";
    const newChar = document.createElement("select");
    newChar.classList.add("chars");
    for (let x = 0; x < characters.length; x++) {
      const charOpt = document.createElement("option");
      charOpt.value = x + 1;
      charOpt.text = characters[x];
      newChar.appendChild(charOpt);
    }
    selectContainer.appendChild(newPlayer);
    selectContainer.appendChild(newChar);
    playerAndChar.appendChild(selectContainer);
  }

  theStartContainer.appendChild(playerAndChar);
  const playBtn = document.createElement("input");
  playBtn.type = "button";
  playBtn.value = "Žaisti";
  playBtn.classList.add("playBtn");
  theStartContainer.appendChild(playBtn);

  playBtn.onclick = () => {
    const allSelectedChars = document.querySelectorAll(".chars");
    let duplicates = false;
    selectedChars = [];

    for (let z = 0; z < howManyPlayers; z++) {
      let whichChar =
        allSelectedChars[z].options[allSelectedChars[z].selectedIndex].value;
      selectedChars.push(whichChar);

      for (let y = 0; y < howManyPlayers; y++) {
        if (whichChar == selectedChars[y] && y != z) {
          duplicates = true;
        }
      }
    }

    if (duplicates == false) {
      theStartContainer.style.display = "none";
      board.classList.remove("blur");
      for (let t = 0; t < howManyPlayers; t++) {
        let playerInfo = {
          playerChar: selectedChars[t],
          money: 1500,
          street: [
            {
              name: "",
              houses: 0,
            },
          ],
          inPrison: false,
        };
        players.push(playerInfo);
      }
      showPlayerInfo();
    } else {
      const duplicatesText = document.createElement("h4");
      duplicatesText.classList.add("duplicatesText");
      duplicatesText.textContent = "Negali kartotis simboliai!";
      theStartContainer.appendChild(duplicatesText);
    }
  };
});*/
