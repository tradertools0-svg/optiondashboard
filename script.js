// Dummy static data — iske jagah baad me API se data fetch karoge
const optionData = {
  spotPrice: "₹19,745.25",
  atmStrike: "19750",
  ceLtp: "122.10",
  peLtp: "108.45",
  ceDelta: "+0.46",
  peDelta: "-0.45",
  ltpDiff: "₹13.65"
};

function updateTiles(data) {
  document.getElementById("spotPrice").textContent = data.spotPrice;
  document.getElementById("atmStrike").textContent = data.atmStrike;
  document.getElementById("ceLtp").textContent = data.ceLtp;
  document.getElementById("peLtp").textContent = data.peLtp;
  document.getElementById("ceDelta").textContent = data.ceDelta;
  document.getElementById("peDelta").textContent = data.peDelta;
  document.getElementById("ltpDiff").textContent = data.ltpDiff;
}

// Call once on page load
updateTiles(optionData);
