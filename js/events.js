import elements from "./elements.js";
const Elements = elements();
import operations from "./operations.js"
const Operations = operations()
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
}
