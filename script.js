fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => display(data));
let select = document.querySelectorAll(".currency");
function display(data) {
  let cur = Object.entries(data);
  for (let i = 0; i < cur.length; i++) {
    let option = `<option value="${cur[i][0]}">${cur[i][1]}</option>`;
    select[0].innerHTML += option;
    select[1].innerHTML += option;
  }
}

document.addEventListener("input", function () {
  let source_currency = document.getElementById("source").value;
  let target_currency = document.getElementById("target").value;
  let input = document.getElementById("inp").value;
  convert(source_currency, target_currency, input);
});

function convert(source_currency, target_currency, input) {
  let output = document.getElementById("box");

  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${input}&from=${source_currency}&to=${target_currency}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      output.innerHTML = data.rates[target_currency];
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      output.innerHTML = input;
    });
}
