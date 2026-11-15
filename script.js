// dark mode button
var btn = document.getElementById("theme");
function setLabel() {
  btn.textContent = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
}
btn.addEventListener("click", function () {
  var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  setLabel();
});
setLabel();

