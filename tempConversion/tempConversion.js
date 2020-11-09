const ftoc = function(inputF) {
    let valueC = ((inputF - 32) * (5 / 9));
    if (Number.isInteger(valueC)) {
      return valueC;
    }
    return parseFloat(valueC.toFixed(1));
}

const ctof = function(inputC) {
    let valueF = (inputC * (9 / 5) + 32)
    if (Number.isInteger(valueF)) {
      return valueF;
    }
    return parseFloat(valueF.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
