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
const showOtherCard = document.querySelector(".showOtherCard");
const showPayCard = document.querySelector(".payForCard");
const chanceAction = document.querySelector(".chanceAction");

const buyCard = document.querySelectorAll(".buyCard");
const dontBuy = document.querySelectorAll(".dontBuy");

const payCard = document.querySelector(".payCard");
const payCardText = document.querySelector(".payCardText");
const payCardOwner = document.querySelector(".payCardOwner");
const payCardName = document.querySelector(".payCardName");
const payCardBtn = document.querySelector(".payCardBtn");

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

let selectedChars = ["1", "2"];
let timeleft = 10;
let players = [];
let turns = 0;
let playerIndex = 0;
let stopTime = false;

let streetIndex = null;
let busIndex = null;
let isChance = false;
let taxesIndex = null;
let goToJail = false;

let howMuchToPay = 0;
let chanceRandom = null;

for (let t = 0; t < selectedChars.length; t++) {
  let playerInfo = {
    playerChar: selectedChars[t],
    money: 1500,
    street: {
      name: "",
      houses: 0,
    },

    inPrison: false,
    position: {
      x: 0,
      y: 0,
      number: 0,
    },
  };
  players.push(playerInfo);
}
beforeTurn();
turnBtn.addEventListener("click", playerTurn);
finishTurnBtn.addEventListener("click", beforeTurn);

function beforeTurn() {
  finishTurnBtn.style.display = "none";
  turnBtn.style.display = "block";

  if (players.length != turns) turns++;
  else turns = 1;
  timeleft = 10;
  showStreetCard.style.display = "none";
  showChanceCard.style.display = "none";
  showOtherCard.style.display = "none";
  showPayCard.style.display = "none";
  turnNr.textContent = turns + " žaidėjo eilė";
  leftTime.style.display = "none";
  stopTime = true;
}

function timing() {
  if (stopTime == true) return;
  leftTime.textContent = `Liko ${timeleft--} sekundžių`;
  if (timeleft > -1) setTimeout(timing, 1000);
  else beforeTurn();
}
let xx = 0;
function playerTurn() {
  stopTime = false;
  leftTime.style.display = "block";
  finishTurnBtn.style.display = "block";

  turnBtn.style.display = "none";

  const movingPlayer = document.querySelector(".player" + turns);
  let howManyTimeMove = 10;
  //const dices = [1, 1, 2, 2];
  // let howManyTimeMove = null;

  // howManyTimeMove = dices[xx];
  // xx++;

  playerIndex = turns - 1;
  let xMove = players[playerIndex].position.x;
  let yMove = players[playerIndex].position.y;

  while (howManyTimeMove != 0) {
    if (xMove != -1000 && yMove == 0) xMove += -100;
    else if (xMove == -1000 && yMove != -1000) yMove += -100;
    else if (yMove == -1000 && xMove != 0) xMove += 100;
    else yMove += 100;
    howManyTimeMove--;
    players[playerIndex].position.number++;
    if (players[playerIndex].position.number == 40) {
      players[playerIndex].position.number = 0;
      players[playerIndex].money += 200;
    }
  }
  updateInfo();
  movingPlayer.style.cssText = `transform: translate(${xMove}px, ${yMove}px)`;
  players[playerIndex].position.x = xMove;
  players[playerIndex].position.y = yMove;

  showCard();
}

function showCard() {
  const charPosition = players[playerIndex].position.number;

  streetIndex = null;
  isChance = false;
  busIndex = null;
  taxesIndex = null;
  goToJail = false;
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
    case 32:
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
    streetCard(streetIndex, playerIndex);
  } else if (isChance) {
    chanceCard(playerIndex);
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
  else if (goToJail) inJail();
}

function inJail() {
  const movingPlayer = document.querySelector(".player" + turns);
  let moveX = -1000;
  let moveY = 0;
  players[playerIndex].position.number = 10;
  players[playerIndex].position.x = moveX;
  players[playerIndex].position.y = moveY;

  movingPlayer.style.cssText = `transform: translate(${moveX}px,${moveY}px)`;
}

for (let i = 0; i < buyCard.length; i++) {
  buyCard[i].addEventListener("click", () => {
    if (streetIndex != null) {
      players[playerIndex].money -= streets[streetIndex].price;
      streets[streetIndex].owned = players[playerIndex].playerChar;
      showStreetCard.style.display = "none";
    } else if (busIndex != null) {
      players[playerIndex].money -= busPrice;
      buses[busIndex].owned = players[playerIndex].playerChar;
      showOtherCard.style.display = "none";
    }
    updateInfo();
  });
}
for (let i = 0; i < dontBuy.length; i++) {
  dontBuy[i].addEventListener("click", () => {
    showStreetCard.style.display = "none";
    showOtherCard.style.display = "none";
  });
}

function busCard() {
  const cardName = document.querySelector(".cardName");
  const rentPrice = document.querySelectorAll(".rentPrice");
  const cardPrice = document.querySelector(".cardPrice");

  cardName.innerHTML = "Lietuvos<br/>Autobusai";

  for (let i = 0; i < rentPrice.length; i++)
    rentPrice[i].innerHTML = `${busRents[i]} $`;

  cardPrice.innerHTML = `${busPrice} $`;
  showOtherCard.style.display = "block";
}
function payForCard(box) {
  showPayCard.style.display = "block";
  if (box == "street") {
    let streetColor = streets[streetIndex].id.idColor;
    let maxStreetsThisColor = streets[streetIndex].id.idMax;
    let howManySameColor = 0;
    let whoOwns = streets[streetIndex].owned;

    for (let i = 0; i < streets.length; i++) {
      if (streets[i].id.idColor == streetColor && streets[i].owned == whoOwns)
        howManySameColor++;
    }

    if (maxStreetsThisColor > howManySameColor) {
      howMuchToPay = streets[streetIndex].rent[0];

      console.log(maxStreetsThisColor + " / " + howManySameColor);
    } else if (
      maxStreetsThisColor == howManySameColor &&
      streets[streetIndex].houses == 0
    ) {
      console.log(maxStreetsThisColor + " | " + howManySameColor);
      howMuchToPay = streets[streetIndex].rent[1];
    }
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

function chanceCard(index) {
  showChanceCard.style.display = "block";
  let chanceCards = chances.length;
  chanceRandom = Math.floor(Math.random() * chanceCards);

  const chanceText = document.querySelector(".chanceText");
  chanceText.innerHTML = chances[chanceRandom].title;
  console.log(chanceRandom);
  switch (chanceRandom) {
    case 0: // Praeinate laukeli eik gaunate 200
      chanceAction.innerHTML = "Eiti";
      break;
    case 1: // Sumokek 50
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 2: // SUmokaite uz namu po 25 o uz viesbucius po 100
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 3: // Sumokek 50
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 4: // Eini i kalejima, negauni 200
      chanceAction.innerHTML = "Eiti į kalėjimą";
      break;
    case 5: // Eini i respublikos gatve
      chanceAction.innerHTML = "Eiti";
      break;
    case 6: // Gauni 150
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 7: // Gauni po 10 is kiekvieno
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 8: // Grizti 3 langelius atgal
      chanceAction.innerHTML = "Grįžti";
      break;
    case 9: // Gauni 10
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 10: // Gaunu 50
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 11: // Sumoketi 10 arba paimti sansa
      //chanceAction.innerHTML = "Pasiimti";
      break;
    case 12: // Sumoketi 20
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 13: // Gaunu 25
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 14: // Laimiu 100
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 15: // Praeinate laukeli eik gaunate 200
      chanceAction.innerHTML = "Eiti";
      break;
    case 16: // Sumoketi 40 uz nama ir 115 uz viesbucius
      chanceAction.innerHTML = "Mokėti";
      break;
    case 17: // Nemokamas isejimas is kalejimo
      //chanceAction.innerHTML = "Eiti";
      break;
    case 18: // Eiti i paskutini langeli Babenai
      chanceAction.innerHTML = "Eiti";
      break;
    case 19: // Gauni 50
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 20: // Eiti i DADU ledai langeli, jei praeinu EIK gaunu 200
      chanceAction.innerHTML = "Eiti";
      break;
    case 21: // Gauni 200
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 22: // Suomketi 15
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 23: // Gauni 100
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 24: // Eiti i artimiausia autobusu stoti jei praeinu EIK gaunu 200
      chanceAction.innerHTML = "Eiti";
      break;
    case 25: // Gauni 100
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 26: // Eiti i respublikos gatve jei praeinu EIK gaunu 200
      chanceAction.innerHTML = "Eiti";
      break;
    case 27: // Gauni 200
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 28: // Isejimas is kalejimo
      chanceAction.innerHTML = "Pasiimti";
      break;
    case 29: // Sumoketi 100
      chanceAction.innerHTML = "Sumokėti";
      break;
    case 30: // Eiti i kalejima, negauni 200
      chanceAction.innerHTML = "Eiti";
      break;
  }
}
chanceAction.addEventListener("click", () => {
  const movingPlayer = document.querySelector(".player" + turns);
  switch (chanceRandom) {
    case 0: // Praeinate laukeli eik gaunate 200
      players[playerIndex].money += 200;
      players[playerIndex].position.number = 0;
      players[playerIndex].position.x = 0;
      players[playerIndex].position.y = 0;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 1: // Sumokaite 50
      players[playerIndex].money -= 50;
      break;
    case 2: // Sumokaite uz namu po 25 o uz viesbucius po 100
      break;
    case 3: // Sumokaite 50
      players[playerIndex].money -= 50;
      break;
    case 4: // Eini i kalejima, negauni 200
      players[playerIndex].position.number = 10;
      players[playerIndex].position.x = -1000;
      players[playerIndex].position.y = 0;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 5: // Eini i respublikos gatve
      players[playerIndex].position.number = 1;
      players[playerIndex].position.x = -100;
      players[playerIndex].position.y = 0;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 6: // Gauni 150
      players[playerIndex].money += 150;
      break;
    case 7: // Gauni po 10 is kiekvieno
      players[playerIndex].money += (players.length - 1) * 10;
      break;
    case 8: // Grizti 3 langelius atgal
      let goBack = 3;

      while (goBack > 0) {
        if (
          players[playerIndex].position.x >= -1000 &&
          players[playerIndex].position.x != 0 &&
          players[playerIndex].position.y == 0
        ) {
          players[playerIndex].position.x += 100;
        } else if (
          players[playerIndex].position.x == -1000 &&
          players[playerIndex].position.y != 0
        )
          players[playerIndex].position.y += 100;
        else if (
          players[playerIndex].position.y == -1000 &&
          players[playerIndex].position.x != -1000
        )
          players[playerIndex].position.x += 100;
        else if (
          players[playerIndex].position.x == 0 &&
          players[playerIndex].position.y != -1000
        )
          players[playerIndex].position.y += 100;

        if (players[playerIndex].position.number != 0)
          players[playerIndex].position.number--;
        else players[playerIndex].position.number = 39;

        goBack--;
      }

      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 9: // Gauni 10
      players[playerIndex].money += 10;
      break;
    case 10: // Gaunu 50
      players[playerIndex].money += 50;
      break;
    case 11: // Sumoketi 10 arba paimti sansa
      //chanceAction.innerHTML = "Pasiimti";
      break;
    case 12: // Sumoketi 20
      players[playerIndex].money -= 20;
      break;
    case 13: // Gaunu 25
      players[playerIndex].money += 25;
      break;
    case 14: // Laimiu 100
      players[playerIndex].money += 100;
      break;
    case 15: // Praeinate laukeli eik gaunate 200
      players[playerIndex].position.number = 0;
      players[playerIndex].position.x = 0;
      players[playerIndex].position.y = 0;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      players[playerIndex].money += 200;
      break;
    case 16: // Sumoketi 40 uz nama ir 115 uz viesbucius
      break;
    case 17: // Nemokamas isejimas is kalejimo
      //chanceAction.innerHTML = "Eiti";
      break;
    case 18: // Eiti i paskutini langeli Babenai
      players[playerIndex].position.x = 0;
      players[playerIndex].position.y = -100;
      players[playerIndex].position.number = 39;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 19: // Gauni 50
      players[playerIndex].money += 50;
      break;
    case 20: // Eiti i DADU ledai langeli, jei praeinu EIK gaunu 200
      players[playerIndex].position.x = -600;
      players[playerIndex].position.y = -1000;

      if (players[playerIndex].position.number >= 24)
        players[playerIndex].money += 200;

      players[playerIndex].position.number = 24;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 21: // Gauni 20
      players[playerIndex].money += 20;
      break;
    case 22: // Suomketi 15
      players[playerIndex].money -= 15;
      break;
    case 23: // Gauni 100
      players[playerIndex].money += 100;
      break;
    case 24: // Eiti i artimiausia autobusu stoti jei praeinu EIK gaunu 200
      const bus1 = 5 - players[playerIndex].position.number;
      const bus2 = 15 - players[playerIndex].position.number;
      const bus3 = 25 - players[playerIndex].position.number;
      if (players[playerIndex].position.number >= 35) {
        players[playerIndex].position.x = -500;
        players[playerIndex].position.y = 0;
        players[playerIndex].position.number = 5;
        players[playerIndex].money += 200;
      } else {
        if (bus1 > 0) {
          players[playerIndex].position.x = -500;
          players[playerIndex].position.y = 0;
          players[playerIndex].position.number = 5;
        } else if (bus2 > 0) {
          players[playerIndex].position.x = -1000;
          players[playerIndex].position.y = -500;
          players[playerIndex].position.number = 15;
        } else if (bus3 > 0) {
          players[playerIndex].position.x = -500;
          players[playerIndex].position.y = -1000;
          players[playerIndex].position.number = 25;
        } else {
          players[playerIndex].position.x = 0;
          players[playerIndex].position.y = -500;
          players[playerIndex].position.number = 35;
        }
      }

      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 25: // Gauni 100
      players[playerIndex].money += 100;
      break;
    case 26: // Eiti i respublikos gatve jei praeinu EIK gaunu 200
      players[playerIndex].position.x = -100;
      players[playerIndex].position.y = 0;

      if (players[playerIndex].position.number != 0)
        players[playerIndex].money += 200;

      players[playerIndex].position.number = 1;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;
      break;
    case 27: // Gauni 200
      players[playerIndex].money += 200;
      break;
    case 28: // Isejimas is kalejimo
      break;
    case 29: // Sumoketi 100
      players[playerIndex].money -= 100;
      break;
    case 30: // Eiti i kalejima, negauni 200
      players[playerIndex].position.number = 10;
      players[playerIndex].position.x = -1000;
      players[playerIndex].position.y = 0;
      movingPlayer.style.cssText = `transform: translate(${players[playerIndex].position.x}px, ${players[playerIndex].position.y}px)`;

      break;
  }
  showChanceCard.style.display = "none";
  updateInfo();
});

function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let allDices = dice1 + dice2;
  timing();
  return allDices;
}

function updateInfo() {
  const playersMoney = document.querySelectorAll(".playerMoney");
  for (let i = 0; i < players.length; i++) {
    playersMoney[i].textContent = players[i].money + " $";
  }
}

showPlayerInfo();
function showPlayerInfo() {
  for (let i = 0; i < players.length; i++) {
    const playerInfoCont = document.createElement("div");
    playerInfoCont.classList.add("playerInfoCont");
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
    playerInfoCont.innerHTML = `
    <h2 class="playerChar">${i + 1}. ${playerCharSymbol}</h2>
    <h2 class="playerMoney">${players[i].money} $</h2>
  `;

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
