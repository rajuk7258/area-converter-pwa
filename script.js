const units = {
  sqm: 1,
  sqkm: 1e6,
  sqft: 0.092903,
  sqyd: 0.836127,
  sqin: 0.00064516,
  acre: 4046.86,
  hectare: 10000
};

const inputs = {};
for (const key in units) {
  inputs[key] = document.getElementById(key);
}

for (const key in inputs) {
  inputs[key].addEventListener('input', () => {
    if (document.activeElement !== inputs[key]) return;
    const baseValue = parseFloat(inputs[key].value);
    if (isNaN(baseValue)) {
      clearAllExcept(key);
      return;
    }
    updateValuesFrom(key, baseValue);
  });
}

function updateValuesFrom(fromUnit, value) {
  const valueInSqm = value * units[fromUnit];
  for (const key in units) {
    if (key !== fromUnit) {
      inputs[key].value = format(valueInSqm / units[key]);
    }
  }
}

function format(value) {
  return parseFloat(value.toFixed(6)).toString();
}

function clearAllExcept(exceptKey) {
  for (const key in inputs) {
    if (key !== exceptKey) {
      inputs[key].value = '';
    }
  }
}

function clearAll() {
  for (const key in inputs) {
    inputs[key].value = '';
  }
}
