const subscribeForm = document.getElementById("subscribe-form");
const subscribeContent = document.querySelector(".subscribe-content");

subscribeForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(subscribeForm);

    await fetch(subscribeForm.action, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    });

    subscribeContent.innerHTML = `
        <h2>You're in the Queue! 🎉</h2>

        <p>
            Thanks for subscribing!
        </p>
    `;
});
