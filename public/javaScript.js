document.addEventListener('DOMContentLoaded', function() {


    // MOBILE nav bar interactivity
    const toggleNavBarButton = document.querySelector('.mobile-nav-toggle-button');
    const closeNavBarButton = document.querySelector('.mobile-nav-close-button');

    toggleNavBarButton.addEventListener('click', function() {
      const mobileNavBar = document.querySelector('.mobile-nav');
      mobileNavBar.style.display = 'block';
    });

    closeNavBarButton.addEventListener('click', function() {
      const mobileNavBar = document.querySelector('.mobile-nav');
      mobileNavBar.style.display = 'none';
    });


  });