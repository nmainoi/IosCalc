import elements from "./elements.js";
import InsertNumbersOp from "./InsertNumbersOp.js"
import calculator from "./Calculator.js"
const Elements = elements();
const Operations = InsertNumbersOp()
const Calculator = calculator()
export default function events() {

function AddNewNumber(number){
    let newNumber = Operations.addNumber(number,Elements.calcDisplay.value)
    Elements.calcDisplay.value = newNumber;
    Elements.buttonAC.textContent = "C";
}

 Elements.buttonAC.addEventListener("click", function(){
    Elements.calcDisplay.value = 0;
    Elements.buttonAC.textContent = "AC";
 }) 

 Elements.buttonZero.addEventListener("click", function () {
    AddNewNumber(0)
  });
  Elements.buttonOne.addEventListener("click", function () {
    AddNewNumber(1)
  });
  Elements.buttonTwo.addEventListener("click", function () {
    AddNewNumber(2)
  });
  Elements.buttonTree.addEventListener("click", function () {
    AddNewNumber(3)
  });
  Elements.buttonFour.addEventListener("click", function () {
    AddNewNumber(4)
  });
  Elements.buttonFive.addEventListener("click", function () {
    AddNewNumber(5)
  });
  Elements.buttonSix.addEventListener("click", function () {
    AddNewNumber(6)
  });
  Elements.buttonSeven.addEventListener("click", function () {
    AddNewNumber(7)
  });
  Elements.buttonEight.addEventListener("click", function () {
    AddNewNumber(8)
  });
  Elements.buttonNine.addEventListener("click", function () {
    AddNewNumber(9)
  });
  Elements.buttonComma.addEventListener("click", function () {
    AddNewNumber(',')
  });
  Elements.buttonPlus.addEventListener("click",function(){
    Calculator.initOperation(Elements.calcDisplay.value ,'sum')
    Elements.calcDisplay.value = 0;
  })
  Elements.buttonResult.addEventListener('click', function(){
    let result = Calculator.DoCalc(Elements.calcDisplay.value)
    console.log(result);
    Elements.calcDisplay.value = result
  })
  Elements.buttonMinus.addEventListener("click",function(){
    Calculator.initOperation(Elements.calcDisplay.value ,'sub')
    Elements.calcDisplay.value = 0;
  })
  Elements.buttonMultiple.addEventListener("click",function(){
    Calculator.initOperation(Elements.calcDisplay.value ,'multiple')
    Elements.calcDisplay.value = 0;
  })
  Elements.buttonDivide.addEventListener("click",function(){
    Calculator.initOperation(Elements.calcDisplay.value ,'div')
    Elements.calcDisplay.value = 0;
  })
}
