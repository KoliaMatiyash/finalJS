// calendar main info
const calendar = document.getElementById("calendarDays");
const titleCalendar = document.getElementById("titleTxt");
// event window
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
}
creatCalendar();
