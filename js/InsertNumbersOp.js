export default function InsertNumbersOp() {
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

  let makeSum = (number, oldnumber) => {
    let sum = String(oldnumber) + String(number);
    return addDot(sum);
  };
  let addDot = (number) => {
    let result = number;
    if (result.includes(",")) return result;
    if (result.includes(".")) {
      result = String(result).replaceAll(".", "");
    }
    console.log(result);
    return Number(result).toLocaleString("pt-BR");
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
