const icons = document.querySelectorAll(".fa-plus");
const answer = document.querySelectorAll(".faq-answer");

[...icons].map((i) => {
  i.addEventListener("click", (e) => {
    icons.forEach((a) => a.classList.remove("rotate"));
    i.classList.add("rotate");
    [...document.querySelectorAll(".faq-answer")].map(
      (a) => (a.style.height = 0)
    );
    let p = e.target.nextElementSibling;
    p.style.height = `${p.scrollHeight}px`;
  });
});

// Giudes Filters

const langFilterHead = document.querySelectorAll(".langFilterHead");
const langChevron = document.querySelector("#langChevron");
[...langFilterHead].map((h) => {
  h.addEventListener("click", () => {
    let dropdown = h.nextElementSibling;
    dropdown.classList.toggle("dropdownHeight");
    langChevron.classList.toggle("rotate180");
  });
});

const activityFilterHead = document.querySelectorAll(".activityFilterHead");
const activityChevron = document.querySelector("#activityChevron");
[...activityFilterHead].map((h) => {
  h.addEventListener("click", () => {
    let dropdown = h.nextElementSibling;
    dropdown.classList.toggle("dropdownHeight");
    activityChevron.classList.toggle("rotate180");
  });
});

const priceFilterHead = document.querySelectorAll(".priceFilterHead");
const priceChevron = document.querySelector("#priceChevron");
[...priceFilterHead].map((h) => {
  h.addEventListener("click", () => {
    let dropdown = h.nextElementSibling;
    dropdown.classList.toggle("dropdownHeight");
    priceChevron.classList.toggle("rotate180");
  });
});


// Guide Filetrs End 