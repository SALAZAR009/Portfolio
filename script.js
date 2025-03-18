const header = document.querySelector('.Header'); // Target the header element

  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      header.classList.add('header-scrolled'); // Add class when scrolled
    } else {
      header.classList.remove('header-scrolled'); // Remove class when at the top
    }
  });
document.addEventListener('DOMContentLoaded', function () {

    // Get references to the menu icon and mobile menu
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
  
    // Check if elements exist
    if (menuIcon && mobileMenu) {
      // Toggle the mobile menu and change the icon
      menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
  
        // Change the icon between hamburger and "X"
        if (mobileMenu.classList.contains('active')) {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        } else {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      });
  
      // Close the menu when a link is clicked
      mobileMenu.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('active');
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        });
      });
    } else {
      console.error('menuIcon or mobileMenu not found!');
    }
  });

  var typed = new Typed('#Typing', {
    strings: ['Game Developer', 'Combat Designer', 'Enviroment Designer', 'Tech Artist'],
    typeSpeed: 30,
    loop: true,
    backSpeed: 30,
    backDelay: 3000,
    showCursor: false,
  });