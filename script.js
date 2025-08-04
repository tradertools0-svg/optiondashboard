const data = [
  { title: "Spot Price", value: "₹22,480" },
  { title: "ATM Strike", value: "₹22,500" },
  { title: "ATM CE LTP", value: "₹105.20" },
  { title: "ATM PE LTP", value: "₹94.30" },
  { title: "ATM CE Delta", value: "+0.46" },
  { title: "ATM PE Delta", value: "-0.48" },
  { title: "CE Price Diff", value: "+₹2.50" },
  { title: "PE Price Diff", value: "+₹3.10" }
];

const dataGrid = document.getElementById("dataGrid");

data.forEach(item => {
  const tile = document.createElement("div");
  tile.className = "card";
  tile.innerHTML = `<h3>${item.title}</h3><p>${item.value}</p>`;
  dataGrid.appendChild(tile);
});
