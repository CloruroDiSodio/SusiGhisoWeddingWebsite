document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".nav-mobile");
  const openBtn = document.querySelector(".nav-mobile-trigger");
  const closeBtn = document.querySelector(".nav-mobile-close");

  const links = document.querySelectorAll(".nav-mobile a");

  // Initial mobile menu state
  mobileMenu.classList.add("opacity-0", "pointer-events-none", "transition-opacity", "duration-300");

  // Open menu with fade-in
  const openMenu = () => {
    mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  };

  // Close menu with fade-out
  const closeMenu = () => {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
  };

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  links.forEach(link => link.addEventListener("click", closeMenu));
});
