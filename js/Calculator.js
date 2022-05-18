export default function Calculator() {
  const MainTrhead = {
    OldValue: 0,
    Operation: "",
  };


  function initOperation(value, operator) {
    MainTrhead.OldValue = value;
    MainTrhead.Operation = operator;
  }
function formatFileds(number){
return Number(String(number).replaceAll('.','').replaceAll(',','.'));
}

  function DoCalc(value) {
    let result = 0;

    switch (MainTrhead.Operation) {
      case "sum":
        result = formatFileds(MainTrhead.OldValue) + formatFileds(value) ;
        break;
      case "sub":
        result = formatFileds(MainTrhead.OldValue) - formatFileds(value);
        break;
      case "div":
        result = formatFileds(MainTrhead.OldValue) / formatFileds(value);
        break;
      case "multiple":
        result = formatFileds(MainTrhead.OldValue) * formatFileds(value);
        break;
      default:
        break;
    }

    return  Number(String(result)).toLocaleString('pt-BR');
  }

  return {
    initOperation,
    DoCalc
  };
}
