document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".nav-mobile");
  const openBtn = document.querySelector(".nav-mobile-trigger");
  const closeBtn = document.querySelector(".nav-mobile-close");

  const menuItems = `
    <li class="nav-item"><a href="#dettagli">Dettagli</a></li>
    <li class="nav-item"><a href="#regalo-nozze">Regalo di nozze</a></li>
    <li class="nav-item"><a href="/q-and-a">Q&A</a></li>
    <li class="button-small nav-item-rsvp"><a href="/rsvp">RSVP</a></li>
  `;

  // Desktop menu
  document.getElementById("menu-items").innerHTML = `<ul class="flex gap-10 items-center">${menuItems}</ul>`;

  // Mobile menu
  document.getElementById("menu-items-mobile").innerHTML = `
    <ul class="flex flex-col items-start justify-center gap-1 h-full text-lg">
      ${menuItems}
    </ul>
  `;

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
