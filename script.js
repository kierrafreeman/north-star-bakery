const products = [
    "Signature Loaf",
    "Fresh Pastries",
    "Celebration Cakes"
];

const productInfo = {
    loaf: {
        name: "Signature Loaf",
        price: "$4–$9"
    },
    pastries: {
        name: "Fresh Pastries",
        price: "$3–$7"
    },
    cakes: {
        name: "Celebration Cakes",
        price: "$25–$60"
    }
};

function saveFavorite(product) {
    localStorage.setItem("favoriteProduct", product);

    const message = document.getElementById("favoriteMessage");

    if (message) {
        message.textContent = "Your favorite is saved: " + product;
    }
}

function loadFavorite() {
    const favorite = localStorage.getItem("favoriteProduct");

    const message = document.getElementById("favoriteMessage");

    if (favorite && message) {
        message.textContent = "Your saved favorite is: " + favorite;
    }
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const items = document.getElementById("items");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const itemsError = document.getElementById("itemsError");

    nameError.textContent = "";
    emailError.textContent = "";
    itemsError.textContent = "";

    let valid = true;

    if (name.value.trim().length < 2) {
        nameError.textContent = "Please enter at least 2 characters.";
        valid = false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (items.value.trim().length < 5) {
        itemsError.textContent = "Please enter at least 5 characters.";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("customerName", name.value.trim());
        localStorage.setItem("customerEmail", email.value.trim());

        alert("Your request has been accepted!");
    }
}

function loadCustomerInformation() {
    const savedName = localStorage.getItem("customerName");
    const savedEmail = localStorage.getItem("customerEmail");

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (savedName && name) {
        name.value = savedName;
    }

    if (savedEmail && email) {
        email.value = savedEmail;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    loadFavorite();
    loadCustomerInformation();

    const favoriteButtons = document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            saveFavorite(button.getAttribute("data-product"));
        });
    });

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", validateForm);
    }
});
