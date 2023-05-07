function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM D, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
  let guatemalaElement = document.querySelector("#guatemala");
  if (guatemalaElement) {
    let guatemalaDateElement = guatemalaElement.querySelector(".date");
    let guatemalaTimeElement = guatemalaElement.querySelector(".time");
    let guatemalaTime = moment().tz("America/Guatemala");
    guatemalaDateElement.innerHTML = guatemalaTime.format("dddd, MMMM D, YYYY");
    guatemalaTimeElement.innerHTML = guatemalaTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
  let newfoundlandElement = document.querySelector("#newfoundland");
  if (newfoundlandElement) {
    let newfoundlandDateElement = newfoundlandElement.querySelector(".date");
    let newfoundlandTimeElement = newfoundlandElement.querySelector(".time");
    let newfoundlandTime = moment().tz("Canada/Newfoundland");
    newfoundlandDateElement.innerHTML =
      newfoundlandTime.format("dddd, MMMM D, YYYY");
    newfoundlandTimeElement.innerHTML = newfoundlandTime.format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format(" A")}</small></div>
          </div></div>
        <br /><a href="/">Back to home page</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
