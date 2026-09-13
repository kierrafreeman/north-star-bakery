// North Star Bakery - Touchstone 4 JavaScript

const products = [
    "Signature Loaf",
    "Fresh Pastries",
    "Celebration Cakes"
];

const productInfo = {
    "Signature Loaf": {
        description: "A fresh handmade loaf baked with care.",
        price: "$4–$9"
    },
    "Fresh Pastries": {
        description: "Fresh pastries baked throughout the day.",
        price: "$3–$7"
    },
    "Celebration Cakes": {
        description: "Cakes made for birthdays and special events.",
        price: "$25–$60"
    }
};

function saveFavorite(product) {
    localStorage.setItem("favoriteProduct", product);

    const message = document.getElementById("favoriteMessage");

    if (message) {
        message.textContent =
            product + " has been saved as your favorite!";
    }
}

function loadFavorite() {
    const favorite = localStorage.getItem("favoriteProduct");
    const message = document.getElementById("favoriteMessage");

    if (favorite && message) {
        message.textContent =
            "Your saved favorite is: " + favorite;
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
        nameError.textContent =
            "Please enter your name using at least 2 characters.";
        valid = false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    if (items.value.trim().length < 5) {
        itemsError.textContent =
            "Please provide at least 5 characters of item details.";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("customerName", name.value);
        localStorage.setItem("customerEmail", email.value);

        alert("Thank you! Your request is ready to be sent.");
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

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", validateForm);
    }

    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            saveFavorite(button.dataset.product);
        });
    });
});
