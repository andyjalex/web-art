var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var nav__items = document.querySelector('.mobile-nav__items');

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');

  backdrop.style.display = 'block';
  setTimeout(function() {
    backdrop.classList.add('open');
  }, 10)

})

backdrop.addEventListener("click", function() {
  //mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal()
});


nav__items.addEventListener("click", function() {
  mobileNav.classList.remove('open');
  closeModal()
})

function closeModal() {

  // if(modal) {
  //   modal.classList.remove('open');
  // }
  backdrop.style.display = 'none';
  setTimeout(function() {
    backdrop.classList.remove('open');
  }, 10)
}
