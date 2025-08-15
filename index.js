let form = document.querySelector("form");
let input = document.querySelector("#number");
let toFahrenheit = document.querySelector("#celsius-fahrenheit");
let toCelsius = document.querySelector("#fahrenheit-celsius");
let output = document.querySelector(".output");
let temp;
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = temp * 9 / 5 + 32;
    output.textContent = temp.toFixed(2) + "°F";
  }
  else if (toCelsius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * 5 / 9;
    output.textContent = temp.toFixed(2) + "°C";
  }
  else {
    output.textContent = "Select a unit";
  }
});
let themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") 
    ? "☀️ Light Mode" 
    : "🌙 Dark Mode";
});
