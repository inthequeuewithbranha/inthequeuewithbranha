const subscribeForm = document.getElementById("subscribe-form");
const subscribeContent = document.querySelector(".subscribe-content");
const emailInput = document.getElementById("email");

subscribeForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formBody =
        "userGroup=&mailingLists=&email=" + encodeURIComponent(emailInput.value);

    try {
        const response = await fetch(subscribeForm.action, {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!response.ok) {
            throw new Error("Subscribe request failed");
        }

        subscribeContent.innerHTML = `
            <h2>You're in the Queue! 🎉</h2>

            <p>
                Check your inbox for a welcome email! If you don't see it within a few minutes, check your spam folder and add <strong>branha@inthequeuewithbranha.com</strong> to your contacts so you never miss an episode!
            </p>
        `;
    } catch (error) {
        subscribeContent.innerHTML = `
            <h2>Oops!</h2>

            <p>
                The queue seems a little busy at the moment. Please try again in a few minutes! 
            </p>
        `;
    }
});