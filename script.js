const dummyData = [
  {
    symbol: "BANKNIFTY",
    spot: 47450.25,
    strike: 47500,
    delta: 0.45,
    cePrice: 180.5,
    pePrice: 165.2
  },
  {
    symbol: "NIFTY",
    spot: 22475.10,
    strike: 22500,
    delta: 0.48,
    cePrice: 95.3,
    pePrice: 105.8
  },
  {
    symbol: "FINNIFTY",
    spot: 22300,
    strike: 22300,
    delta: 0.44,
    cePrice: 75.5,
    pePrice: 80.2
  },
  {
    symbol: "RELIANCE",
    spot: 2925.6,
    strike: 2920,
    delta: 0.42,
    cePrice: 42.5,
    pePrice: 50.1
  },
  {
    symbol: "SBIN",
    spot: 793.25,
    strike: 790,
    delta: 0.47,
    cePrice: 10.3,
    pePrice: 9.8
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tiles-container");

  dummyData.forEach(data => {
    const tile = document.createElement("div");
    tile.className = "tile";

    tile.innerHTML = `
      <h3>${data.symbol}</h3>
      <p><strong>Spot:</strong> ₹${data.spot}</p>
      <p><strong>Strike:</strong> ₹${data.strike}</p>
      <p><strong>Δ:</strong> ${data.delta}</p>
      <p><strong>CE:</strong> ₹${data.cePrice}</p>
      <p><strong>PE:</strong> ₹${data.pePrice}</p>
    `;

    container.appendChild(tile);
  });
});
