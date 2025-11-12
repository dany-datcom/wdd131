// ===========================
// Footer: Current Year + Last Modified
// ===========================
const currentYear = new Date().getFullYear();
document.querySelector('footer').innerHTML += `<p>${currentYear}</p>`;

const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ===========================
// Weather Data (Static for now)
// ===========================
// You can adjust these based on your country
const temperatureC = 8; // °C
const windSpeedKmh = 10; // km/h

// ===========================
// Wind Chill Calculation Function
// ===========================
function calculateWindChill(tempC, speedKmh) {
  // Formula from Environment Canada (metric units)
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1); // round to 1 decimal place
}

// ===========================
// Determine if Calculation Applies
// ===========================
let windChillDisplay = "N/A";
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  windChillDisplay = `${calculateWindChill(temperatureC, windSpeedKmh)} °C`;
}

// ===========================
// Display on Page
// ===========================
const weatherSection = document.querySelector(".weather");
if (weatherSection) {
  const chillElement = document.createElement("p");
  chillElement.innerHTML = `Wind Chill: <strong>${windChillDisplay}</strong>`;
  weatherSection.appendChild(chillElement);
}
