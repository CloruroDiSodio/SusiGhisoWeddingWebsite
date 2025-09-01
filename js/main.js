//////////// CONFIG

const menuItemsDescriptor = [
  {label: 'Dettagli', href: '#dettagli', outerClassList: ['nav-item']},
  {label: 'Regalo di nozze', href: '#regalo-di-nozze', outerClassList: ['nav-item']},
  {label: 'Q&A', href: '#q-and-a', outerClassList: ['nav-item']},
  {label: 'RSVP', href: '/rsvp', outerClassList: ['button-small', 'nav-item-rsvp']},
];

//////////// END CONFIG

const getMenuItemsElement = (menuItems) => {
  return menuItems.map(({label, href, outerClassList}) => {
    const li = document.createElement('li');
    li.classList.add(...outerClassList);

    const a = document.createElement('a');
    a.innerText = label;
    a.href = href;

    li.appendChild(a);

    return li;
  });
};

const generateNavigationMenu = (menuItemsDescriptor) => {
  const menuItems = getMenuItemsElement(menuItemsDescriptor);

  // Desktop menu
  document.querySelector("#menu-items").appendChild(menuItems);

  // Mobile menu
  document.querySelector("#menu-items-mobile").appendChild(menuItems);
};

const setupMobileMenu = () => {
  const mobileMenu = document.querySelector(".nav-mobile");
  const openBtn = document.querySelector(".nav-mobile-trigger");
  const closeBtn = document.querySelector(".nav-mobile-close");

  const links = document.querySelectorAll(".nav-mobile a");

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
};

const menu = (() => ({
  descriptor: [],
  generate() {
    const menuItems = getMenuItemsElement(this.descriptor);

    // Desktop menu
    document.querySelector("#menu-items").appendChild(menuItems);

    // Mobile menu
    document.querySelector("#menu-items-mobile").appendChild(menuItems);
  },
  openMobileMenu() {
    this._mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  },
  closeMobileMenu() {
    this._mobileMenu.classList.add("opacity-0", "pointer-events-none");
  },
  setup() {
    this.generate();

    this._mobileMenu = document.querySelector(".nav-mobile");

    const openBtn = document.querySelector(".nav-mobile-trigger");
    const closeBtn = document.querySelector(".nav-mobile-close");

    const links = document.querySelectorAll(".nav-mobile a");

    openBtn.addEventListener("click", this.openMobileMenu.bind(this));
    closeBtn.addEventListener("click", this.closeMobileMenu.bind(this));
    links.forEach(link => link.addEventListener("click", this.closeMobileMenu.bind(this)));

    window.addEventListener('resize', this.closeMobileMenu.bind(this));
  },
}))();

document.addEventListener("DOMContentLoaded", () => {
  menu.setup();
});
