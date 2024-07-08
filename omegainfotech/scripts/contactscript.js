function openNavbar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
  }

  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
  });
