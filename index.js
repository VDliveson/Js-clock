const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let theme = "dark";

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mh = day.getMinutes() * deg;
  let sh = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mh / 12}deg)`;
  min.style.transform = `rotateZ(${mh}deg)`;
  sec.style.transform = `rotateZ(${sh}deg)`;
});

const btn = document.querySelector(".pushable");
const front = document.querySelector(".front");

btn.onclick = () => {
  if (theme === "dark") {
    document.querySelector("body").style.backgroundColor = "white";
    front.style.background = "blue";
    btn.style.background = "rgb(5, 5, 58)";
    theme = "light";
  } else if (theme === "light") {
    document.querySelector("body").style.backgroundColor = "#020f24";
    theme = "dark";
    front.style.background = "hsl(345deg 100% 47%)";
    front.style.color = "white";
    btn.style.background = "hsl(340deg 100% 32%)";
  }
};
