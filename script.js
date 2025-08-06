// Load data from mock_data.json and display in table
fetch("mock_data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("data-output");
    container.innerHTML = ""; // Clear "Loading..."

    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";

    // Create header
    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement("th");
      th.textContent = key;
      th.style.padding = "6px";
      th.style.backgroundColor = "#f2f2f2";
      headerRow.appendChild(th);
    });

    // Fill table rows
    data.forEach(row => {
      const tr = table.insertRow();
      Object.values(row).forEach(val => {
        const td = tr.insertCell();
        td.textContent = val;
        td.style.padding = "6px";
      });
    });

    container.appendChild(table);
  })
  .catch(error => {
    document.getElementById("data-output").innerText = "Error loading data!";
    console.error(error);
  });
