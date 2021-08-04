const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const christmasDay = new Date(2021, 12, 25, 0, 0, 0);

  const stDate = new Date(year, month, day, hours, minutes, seconds);

  const btDay = christmasDay.getTime() - stDate.getTime();
  const dday = Math.floor(btDay / (1000 * 60 * 60 * 24));
  const ddayHours = String(
    Math.floor((btDay / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const ddayMinutes = String(Math.floor((btDay / (1000 * 60)) % 60)).padStart(2,"0");
  const ddaySeconds = String(Math.floor((btDay / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = dday + "d " + ddayHours + "h " + ddayMinutes + "m " + ddaySeconds + "s ";
}

getClock();
setInterval(getClock, 1000);
