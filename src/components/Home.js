import img from "../images/main-room.jpg";

function Home() {
    const desc = document.createElement("section");
    desc.id = "desc";
    desc.innerHTML = `
        <figure>
            <img src="${img}" alt="The main dining room of The Odin restaurant">
            <figcaption>Photo by <a href="https://unsplash.com/@ninjason" target="_blank"
                    rel="noopener noreferrer">Jason Leung</a> on
                Unsplash
            </figcaption>
        </figure>
        <div class="desc-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta distinctio quae vitae
                laboriosam eos architecto doloribus. Dolor, tempore quasi accusantium dignissimos error, odio
                tenetur qui sed repellendus saepe iure, eligendi nemo impedit voluptatum blanditiis exercitationem
                reiciendis ad unde quisquam fugit animi corporis inventore odit? Dolorum odio exercitationem illo
                facilis!</p>
        </div>
    `
    const openingHours = document.createElement("section");
    openingHours.id = "opening-hours";
    openingHours.innerHTML = `
        <h2>Opening Hours</h2>
        <dl>
            <dt>Monday</dt>
            <dd>
                <time datetime="09:00">9:00 AM</time> -
                <time datetime="17:00">5:00 PM</time>
            </dd>
            <dt>Tuesday</dt>
            <dd>
                <time datetime="09:00">9:00 AM</time> -
                <time datetime="17:00">5:00 PM</time>
            </dd>
            <dt>Wednesday</dt>
            <dd>
                <time datetime="09:00">9:00 AM</time> -
                <time datetime="17:00">5:00 PM</time>
            </dd>
            <dt>Thursday</dt>
            <dd>
                <time datetime="09:00">9:00 AM</time> -
                <time datetime="17:00">5:00 PM</time>
            </dd>
            <dt>Friday</dt>
            <dd>
                <time datetime="09:00">9:00 AM</time> -
                <time datetime="17:00">5:00 PM</time>
            </dd>
            <dt>Saturday</dt>
            <dd>
                <time datetime="10:00">10:00 AM</time> -
                <time datetime="14:00">2:00 PM</time>
            </dd>
            <dt>Sunday</dt>
            <dd>Closed</dd>
        </dl>
    `
    const location = document.createElement("section");
    location.id = "location";
    location.innerHTML = `
        <h2>Our Location</h2>
        <address>
            <p>
                <strong>The Odin Restaurant</strong><br>
                123 Main Street<br>
                City, State 45678<br>
                <a href="tel:+1234567890">+1 (234) 567-890</a><br>
                <a href="mailto:info@company.com">info@theodinrestaurant.com</a>
            </p>
            <p>
                <a href="https://maps.google.com/?q=123+Main+Street,+City,+State+45678" target="_blank"
                    rel="noopener noreferrer">
                    View on Google Maps
                </a>
            </p>
        </address>
    `
    const homePage = document.createElement("div");
    homePage.appendChild(desc);
    homePage.appendChild(openingHours);
    homePage.appendChild(location);

    return homePage
}

export default Home;