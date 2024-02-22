const boxes = document.querySelectorAll(".box");
const resultEL = document.querySelector(".result");
const resetEl = document.querySelector(".reset-Button");

let turnO = true;

let winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerHTML = "O";
      box.disabled = true;
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.disabled = true;
      turnO = true;
    }
    // checkWin();
    checkGameStatus();
    // box.disabled = false;
  });
});

resetEl.addEventListener("click", () => {
  resetbtn();
});

function checkWin() {
  for (let Pattern of winPattern) {
    let pos1Val = boxes[Pattern[0]].innerHTML;
    let pos2Val = boxes[Pattern[1]].innerHTML;
    let pos3Val = boxes[Pattern[2]].innerHTML;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        resultEL.innerHTML = `Congratulation Winner is ${pos1Val}`;
        resultEL.style.color = "royalblue";

        disableEmptyBoxes();
        return true;
      }
    }
  }
  return false;
}
function disableEmptyBoxes() {
  for (let box of boxes) {
    if (box.innerHTML === "") {
      box.disabled = true;
    }
  }
}
function checkDraw() {
  for (let box of boxes) {
    if (box.innerHTML === "") {
      return false;
    }
  }
  return true;
}
function checkGameStatus() {
  if (checkWin()) {
  } else if (checkDraw()) {
    console.log("game Draw");

    resultEL.innerHTML = "It's Draw";
    resultEL.style.color = "red";
  }
}
function resetbtn() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    resultEL.innerHTML = "";
    box.disabled = false;
  });
}
