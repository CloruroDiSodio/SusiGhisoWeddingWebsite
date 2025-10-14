document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rsvp-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const partecipazione = data.partecipazione;

    try {
      let response = await fetch("https://cloud.activepieces.com/api/v1/webhooks/yHMVD9AS2FVmslgSU3oe9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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
      console.error(error);
      alert("Errore di connessione, riprova!");
    }
  });
});