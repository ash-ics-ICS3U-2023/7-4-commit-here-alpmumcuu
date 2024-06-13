/**
 * This file will get loaded by index.html
 */



let clicks = 0;

document.getElementById("btn_click").addEventListener("click", buttonClick);

function buttonClick() {

  clicks++;
  document.getElementById("click_counter").textContent = clicks;
}
document.getElementById("btn_decrement").addEventListener("click", decrementClicks);
document.getElementById("btn_reset").addEventListener("click", resetClicks);

function decrementClicks() {
  console.log("Decrement button clicked");
  clicks--;
  document.getElementById("click_counter").textContent = clicks;
}

function resetClicks() {
  console.log("Reset button clicked");
  clicks = 0;
  document.getElementById("click_counter").textContent = clicks;
}