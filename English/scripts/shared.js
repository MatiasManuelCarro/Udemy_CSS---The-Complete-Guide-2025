// Select important elements from the Document Object Model
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var chosenPlan = null;

// Listener CHOOSE PLAN buttons
if (selectPlanButtons) {
  for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function (event) {
      // keep chosen plan
      chosenPlan = event.target.closest(".plan").querySelector(".plan__title").textContent;
      // open modal (do you want to continue?) and backdrop
      if (modal && backdrop) {
        modal.classList.add("open");
        backdrop.classList.add("open");
      }
    });
  }
}

//  CONTINUE button
var continueBtn = document.getElementById("continue-btn");
if (continueBtn) {
  continueBtn.addEventListener("click", function () {
    //close modal and backdrop
    if (modal && backdrop) {
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    }
    if (chosenPlan) {
      // redirect with selected plan in query string inside droplist
      window.location.href = "start-hosting/index.html?plan=" + encodeURIComponent(chosenPlan.toLowerCase());
    }
  });
}

//  CANCEL button
var cancelBtn = document.getElementById("cancel-btn");
if (cancelBtn) {
  cancelBtn.addEventListener("click", function () {
    //close modal and backdrop
    if (modal && backdrop) {
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    }
    chosenPlan = null; // reset
  });
}

//Backdrop click closes modal and mobile nav
if (backdrop) {
  backdrop.addEventListener("click", function () {
    if (mobileNav) mobileNav.classList.remove("open");
    closeModal();
  });
}

// "No" button inside modal also closes it
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

// Helper function to close modal and backdrop
function closeModal() {
  if (modal) modal.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

// Toggle button opens mobile navigation with backdrop
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
// Remove animation class after it finishes
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
      planSelect.value = selectedPlan; // pre-fill dropdown with chosen plan
    }
  }
});

