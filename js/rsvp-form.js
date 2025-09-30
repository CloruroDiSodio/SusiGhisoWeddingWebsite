document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rsvp-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const partecipazione = formData.get("partecipazione"); 

    try {
        let response = await fetch("https://hooks.zapier.com/hooks/catch/24797078/u1jpjk4/", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            if (partecipazione && partecipazione.toLowerCase() === "si") {
                window.location.href = "thank-you.html?answer=8000e";
            } else {
                window.location.href = "thank-you.html?answer=6f8db";
            }
        } else {
            alert("C'è stato un errore, riprova per favore!");
        }
    } catch (error) {
        alert("Errore di connessione, riprova!");
    }
  });
});
