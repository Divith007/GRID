console.log("JS file is working!");

document.getElementById('menu-toggle')?.addEventListener('click', () => {
  document.getElementById('nav-menu')?.classList.toggle('show');
});