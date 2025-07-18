console.log("Script loaded!");

document.getElementById('menu-toggle')?.addEventListener('click', function () {
  console.log("Hamburger clicked");
  document.getElementById('nav-menu')?.classList.toggle('show');
});