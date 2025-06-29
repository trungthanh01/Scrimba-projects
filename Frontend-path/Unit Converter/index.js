// conversion constants
const M2F = 3.281;
const L2G = 0.264;
const KG2LB = 2.204;

// floor to exactly two decimal places
function floor2(val) {
  return Math.floor(val * 100) / 100;
}

// run all conversions & update UI
function convert() {
  const raw = parseFloat(document.getElementById('value-input').value) || 0;

  // LENGTH
  const m2f = floor2(raw * M2F).toFixed(2);
  const f2m = floor2(raw / M2F).toFixed(2);
  document.getElementById('length').innerText =
    `${raw} meters = ${m2f} feet | ` +
    `${raw} feet = ${f2m} meters`;

  // VOLUME
  const l2g = floor2(raw * L2G).toFixed(2);
  const g2l = floor2(raw / L2G).toFixed(2);
  document.getElementById('volume').innerText =
    `${raw} liters = ${l2g} gallons | ` +
    `${raw} gallons = ${g2l} liters`;

  // MASS
  const kg2lb = floor2(raw * KG2LB).toFixed(2);
  const lb2kg = floor2(raw / KG2LB).toFixed(2);
  document.getElementById('mass').innerText =
    `${raw} kilograms = ${kg2lb} pounds | ` +
    `${raw} pounds = ${lb2kg} kilograms`;
}

// wire up button
document.getElementById('convert-btn')
        .addEventListener('click', convert);

// initial render
convert();
