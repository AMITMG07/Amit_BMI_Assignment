function bmi() {
  let heightElem = document.getElementById('height');
  let weightElem = document.getElementById('weight');
  let height = parseFloat(heightElem.value) / 100;
  let weight = parseFloat(weightElem.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);
  document.getElementById('bmi').value = bmi;

  let bmiPrime = (bmi / 25).toFixed(2);
  document.getElementById('bmiprime').value = bmiPrime;

  const bmiValue = +bmi;
  const result = document.getElementById('bmispe');

  if (bmiValue < 18.5) {
    result.innerText = "Status: Underweight.";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    result.innerText = "Status: Normal weight.";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    result.innerText = "Status: Overweight.";
  } else if (bmiValue >= 30 && bmiValue <= 34.9) {
    result.innerText = "Status: Obesity.";
  } else if (bmiValue >= 35) {
    result.innerText = "Status: Severe obesity.";
  }

  // Clear inputs
  heightElem.value = '';
  weightElem.value = '';

  // Hide the button
  document.getElementById('btn').style.display = 'none';
}
