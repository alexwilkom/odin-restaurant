function Contact() {
    const contactSection = document.createElement("section");
    contactSection.id = "contact";

    const heading2 = document.createElement("h2");
    heading2.innerHTML = "Get in touch with us";

    const form = document.createElement("form");
    form.innerHTML = `
        <p>
            <label for="client-name">Preferred name</label>
            <input type="text" id="client-name" placeholder="Marcel Proust">
        </p>
        <p>
            <label for="client-email">Email address</label>
            <input type="email" id="client-email" placeholder="marcel@combray.com">
        </p>
        <p>
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
        </p>
    `
    const button = document.createElement("button");
    button.innerText = "Send";
    form.appendChild(button);
    button.addEventListener("click", (event) => event.preventDefault());

    contactSection.appendChild(heading2);
    contactSection.appendChild(form);

    return contactSection
}

export default Contact;