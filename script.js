document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdown.addEventListener("click", (event) => {
      event.preventDefault();

      dropdownContent.classList.toggle("show");

      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          const otherContent = otherDropdown.querySelector(".dropdown-content");
          otherContent.classList.remove("show");
        }
      });
    });
  });

  const btn = document.getElementById("mobilemenu");
  const mobilenav = document.getElementById("mobilenav");

  mobilenav.style.left = "-100%";

  btn.addEventListener("click", () => {
    if (mobilenav.style.left === "-100%") {
      mobilenav.style.left = "50%";
      btn.src = "images/icon-close.svg";
    } else {
      mobilenav.style.left = "-100%";
      btn.src = "images/icon-hamburger.svg";
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !mobilenav.contains(event.target) &&
      event.target !== btn &&
      mobilenav.style.left === "50%"
    ) {
      mobilenav.style.left = "-100%";
      btn.src = "images/icon-hamburger.svg";
    }
  });
});
