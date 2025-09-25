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


  // RSVP
  document.getElementById("rsvp-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const partecipazione = formData.get("partecipazione"); 

    try {
        // TODO CHANGE ZAPIER HOOK
        let response = await fetch("https://hooks.zapier.com/hooks/catch/24747380/u1kk1l8/", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            if (partecipazione && partecipazione.toLowerCase() === "si") {
                window.location.href = "thank-you.html?yes"; // FIX REDIRECT HERE
            } else {
                window.location.href = "thank-you.html?no"; // FIX REDIRECT HERE
            }
        } else {
            alert("C'è stato un errore, riprova per favore!");
        }
    } catch (error) {
        alert("Errore di connessione, riprova!");
    }
  });
});
