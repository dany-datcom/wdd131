const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
        templeName: "Edmonton Alberta",
        location: "Alberta, Canada",
        dedicated: "1999, December, 12",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155-main.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, june, 10",
        area: 10700 ,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
    },

];


// =======================
// Display Function
// =======================
const container = document.getElementById("temple-cards");

function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(temple => {
        container.innerHTML += `
            <figure class="temple-card">
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            </figure>
        `;
    });
}


// =======================
// Filters
// =======================
const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
const largeTemples = temples.filter(t => t.area > 90000);
const smallTemples = temples.filter(t => t.area < 10000);


// =======================
// Navigation Click Events
// =======================
document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;

    const option = e.target.textContent;

    switch (option) {
        case "Old":
            displayTemples(oldTemples);
            break;

        case "New":
            displayTemples(newTemples);
            break;

        case "Large":
            displayTemples(largeTemples);
            break;

        case "Small":
            displayTemples(smallTemples);
            break;

        case "Home":
            displayTemples(temples);
            break;
    }
});


// =======================
// Hamburger Menu
// =======================
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// =======================
// Footer Date
// =======================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


// =======================
// Load all on start
// =======================
displayTemples(temples);