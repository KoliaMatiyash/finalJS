// calendar main info
const allCalendar = document.getElementById("calendar");
const calendar = document.getElementById("calendarDays");
const titleCalendar = document.getElementById("titleTxt");
// event window
const eventWindow = document.getElementById("eventWindow");
const eventList = document.getElementById("eventList");
const eventForm = document.getElementById("eventForm");
const eventInput = document.getElementById("nameEvent");
// bnts
const prevBtn = document.getElementById("btnPrev");
const nextBtn = document.getElementById("btnNext");
const closeEwindow = document.getElementById("closeModel");
const eventBtn = document.getElementById("saveEvent");

let todayMonth = new Date().getMonth();
let todayYear = new Date().getFullYear();
let todayDay = new Date().getDate();
// let events = JSON.parse(localStorage.getItem("event"));

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function creatCalendar() {
  calendar.innerHTML = "";
  titleCalendar.textContent = new Date(todayYear, todayMonth).toLocaleString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );
  days.forEach((day) => {
    const nameOfDay = document.createElement("div");
    nameOfDay.classList.add("day_name");
    nameOfDay.textContent = day;
    calendar.append(nameOfDay);
  });
  const firstDay = new Date(todayYear, todayMonth, 1).getDay();
  const lastDate = new Date(todayYear, todayMonth + 1, 0).getDate();
  let corectDay;
  if (firstDay === 0) {
    corectDay = 6;
  } else {
    corectDay = firstDay - 1;
  }
  for (let i = 0; i < corectDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day");
    calendar.appendChild(emptyDay);
  }
  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;
    if (i === todayDay && todayMonth && todayYear) {
      day.classList.add("event_day");
    }
    // const eventDay = `${i}-${todayMonth + 1}-${todayYear}`;
    // if (events[eventDay]) {

    // }
    calendar.appendChild(day);

    day.addEventListener("click", () => openEWindow(day));
  }
}
function openEWindow(day) {
  const evnentDay = document.querySelectorAll(".event_day");
  console.log(evnentDay);
  evnentDay.forEach((d) => {
    d.classList.remove("event_day");
  });

  day.classList.add("event_day");

  allCalendar.classList.remove("no_border");
  eventWindow.classList.remove("unvisible");
}
closeEwindow.addEventListener("click", () => {
  eventWindow.classList.add("unvisible");
  allCalendar.classList.add("no_border");
});
eventForm.addEventListener("submit", (e) => {
  // e.preventDefault()
});
function addEvent() {
  const listElement = document.createElement("li");
  listElement.textContent = eventInput.value.trim();
  eventInput.value = "";
  const deletBtn = document.createElement("button");
  deletBtn.setAttribute("id", "deleteEvent");
  deletBtn.textContent = "🗑️";
  listElement.appendChild(deletBtn);
  const deleteLi = document.getElementById("deleteEvent");
  deleteLi.addEventListener("click", (e) => {
    e.preventDefault;
    this.parentElement.remove();
  });
}
eventForm.addEventListener("submit", (e) => {
  e.preventDefault;
  addEvent();
});
creatCalendar();
