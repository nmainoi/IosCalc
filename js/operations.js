export default function operations() {
    
  let hasComma = (number, oldnumber) => {
    if (number == "," && String(oldnumber).includes(",")) {
      return true;
    }
    return false;
  };

  let verifyNullZero = (oldnumber) => {
    if (oldnumber == null || Number(oldnumber) === 0) {
      return true;
    } else return false;
  };

  let addDot = (number) => {
    return number;
  };

  let makeSum = (number, oldnumber) => {
    let sum = String(oldnumber) + String(number);
    return addDot(sum);
  };

  function addNumber(number, oldnumber) {
    if (hasComma(number, oldnumber)) {
      return oldnumber;
    }

    if (verifyNullZero(oldnumber) && number != ",") {
      return number;
    } else return makeSum(number, oldnumber);
  }
  return { addNumber };

}
