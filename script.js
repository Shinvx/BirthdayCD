const targetDate = new Date('2026-03-28T00:00:00');

function updateCountdown() {
  const currentTime = new Date();
  let nextBirthday = new Date(targetDate);

  if (currentTime > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const difference = nextBirthday - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector("#days").innerText = days;
  document.querySelector("#hours").innerText = hours;
  document.querySelector("#minutes").innerText = minutes;
  document.querySelector("#seconds").innerText = seconds;

  if (difference < 0) {
      clearInterval(interval);
      document.querySelector("#timer").innerText = "The event has started!";
  }
}

const interval = setInterval(updateCountdown, 1000);