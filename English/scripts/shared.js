var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// Only add listeners if the elements exist.
if (selectPlanButtons) {
  for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function () {
      if (modal && backdrop) {
        modal.classList.add("open");
        backdrop.classList.add("open");
      }
    });
  }
}

if (backdrop) {
  backdrop.addEventListener("click", function () {
    if (mobileNav) mobileNav.classList.remove("open");
    closeModal();
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) modal.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    if (mobileNav && backdrop) {
      mobileNav.classList.add("open");
      backdrop.classList.add("open");
    }
  });
}

//Animation for recommended badge
const plusBadge = document.querySelector("#plus .package__badge");
if (plusBadge) {
  plusBadge.addEventListener("mouseenter", () => {
    plusBadge.classList.add("shake");

    plusBadge.addEventListener(
      "animationend",
      () => {
        plusBadge.classList.remove("shake");
      },
      { once: true },
    );
  });
}
// Auto-select plan in Start Hosting form based on query string
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedPlan = urlParams.get("plan");
  if (selectedPlan) {
    const planSelect = document.getElementById("plan");
    if (planSelect) {
      planSelect.value = selectedPlan;
    }
  }
});

