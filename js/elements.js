export default function elements() {
 const buttonZero = document.querySelector('.Zero')
  const buttonOne = document.querySelector(".One");
  const buttonTwo = document.querySelector(".Two");
  const buttonTree = document.querySelector(".Tree");
  const buttonFour = document.querySelector(".Four");
  const buttonFive = document.querySelector(".Five");
  const buttonSix = document.querySelector(".Six");
  const buttonSeven = document.querySelector(".Seven");
  const buttonEight = document.querySelector(".Eight");
  const buttonNine = document.querySelector(".Nine");
  const calcDisplay = document.querySelector("#number_imput");
  const buttonComma = document.querySelector(".Comma");
  const buttonAC = document.querySelector('.AC')
  return {
    buttonZero,
    buttonOne,
    buttonTwo,
    buttonTree,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonSeven,
    buttonEight,
    buttonNine,
    buttonComma,
    calcDisplay,
    buttonAC
  };
}
