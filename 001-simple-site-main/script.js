const toggleBtn = document.querySelector(".header__toggle-btn");
const header = document.querySelector(".header");

console.log("Script is running");  // Add this to check if the script runs

toggleBtn.addEventListener("click", () => {
    console.log("Button clicked"); // Add this to check if the button is being clicked
    header.classList.toggle("header-open");
});
