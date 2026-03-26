var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style['background-image']);

//for (var i = 0; i < selectPlanButtons.length; i++) {
//  selectPlanButtons[i].addEventListener("click", function() {
//    // modal.style.display = "block";
//    // backdrop.style.display = "block";
//    modal.classList.add('open');
//    backdrop.classList.add('open');
//  });
//}
//
//backdrop.addEventListener("click", function() {
//    // mobileNav.style.display = 'none';
//    mobileNav.classList.remove('open');
//    closeModal();
//});
//
//if(modalNoButton){
//  modalNoButton.addEventListener("click", closeModal);
//}

//function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
//  if(modal){
//      modal.classList.remove('open');
//  backdrop.classList.remove('open');
//}}

//toggleButton.addEventListener('click', function() {
//  mobileNav.classList.add('open');
//  backdrop.classList.add('open');
//});

// sintaxis event listener
// elemento.addEventListener(tipoDeEvento, funciónAejecutar);

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

// CONTINUE button
var continueBtn = document.getElementById("continue-btn");
if (continueBtn) {
  continueBtn.addEventListener("click", function () {
    // close modal and backdrop
    if (modal && backdrop) {
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    }
    // redirect directo a start hosting
    window.location.href = "start-hosting/index.html";
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
