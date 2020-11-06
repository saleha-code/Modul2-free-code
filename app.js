let headerTag = document.getElementById("color");
const btnClickMe = document.querySelector(".button");
const emojiExpression = document.querySelector("#expression");
const emojiFeeling = document.querySelector("#feeling");

document.getElementById("date").innerHTML = new Date().toDateString();

(function () {
  //define custom event
  headerTag.addEventListener("textChanged", (e) => {
    headerTag.textContent = e.detail.text;
    headerTag.style.color = e.detail.textColor;
  });

  //addListener to Answer button to change text color
  btnClickMe.addEventListener("click", (e) => {
    dispatchCustomEvent();
    btnClickMe.classList.add("hide");
  });

  function dispatchCustomEvent() {
    const event = new CustomEvent("textChanged", {
      detail: {
        text:
          'The First week was like as if I landed on an "Alien planet", but its getting better day by day now :)',
        textColor: "red",
      },
    });
    headerTag.dispatchEvent(event);
  }

  emojiExpression.addEventListener("click", (e) => {
    const image = '<img src="./photos/confuse.png">';

    e.target.insertAdjacentHTML("beforebegin", image);
    emojiExpression.classList.add("hide");
  });

  emojiFeeling.addEventListener("click", (e) => {
    const image = '<img src="./photos/all good.jpg">';

    e.target.insertAdjacentHTML("beforebegin", image);
    emojiFeeling.classList.add("hide");
  });
})();
