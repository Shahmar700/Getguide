let guide = document.getElementById("guide");
let company = document.getElementById("company");
let driver = document.getElementById("driver");
guide.addEventListener("click", () => {
  guide.checked = true;
  company.checked = false;
  driver.checked = false;
  document.getElementById("reqSpan").style.display = "none";
  document.getElementById("signBtn").disabled = false;
});
company.addEventListener("click", () => {
  company.checked = true;
  guide.checked = false;
  driver.checked = false;
  document.getElementById("reqSpan").style.display = "none";
  document.getElementById("signBtn").disabled = false;
});
driver.addEventListener("click", () => {
  driver.checked = true;
  guide.checked = false;
  company.checked = false;
  document.getElementById("reqSpan").style.display = "none";
  document.getElementById("signBtn").disabled = false;
});
