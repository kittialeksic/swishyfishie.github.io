document.getElementById("submit").addEventListener("click", bmiCalculator);
function bmiCalculator() {
  var height = parseInt(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  var bmi;
  var newCm = parseFloat(height/100);

  bmi = weight / (newCm * newCm);
  bmi = bmi.toFixed(1);
  console.log(bmi);

  document.getElementById("result").innerHTML = bmi;

  var number = bmi;
  function showMessage(bmi) {
    if (number < 18.6) {
      document.getElementById("message").innerHTML = "A bit underweight";
    } else if (number < 24.9 || number === 18.7) {
      document.getElementById("message").innerHTML = "Not too bad";
    } else if (number > 25)
      document.getElementById("message").innerHTML = "Your first gym appointment is in 2 hours!";
  }
  showMessage();
}