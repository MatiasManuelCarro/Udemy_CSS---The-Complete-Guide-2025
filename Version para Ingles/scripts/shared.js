var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// Solo agregar listeners si existen los elementos
if (selectPlanButtons) {
  for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
      if (modal && backdrop) {
        modal.classList.add('open');
        backdrop.classList.add('open');
      }
    });
  }
}

if (backdrop) {
  backdrop.addEventListener("click", function() {
    if (mobileNav) mobileNav.classList.remove('open');
    closeModal();
  });
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) modal.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

if (toggleButton) {
  toggleButton.addEventListener('click', function() {
    if (mobileNav && backdrop) {
      mobileNav.classList.add('open');
      backdrop.classList.add('open');
    }
  });
}
