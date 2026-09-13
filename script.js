document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".favorite-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const product = button.getAttribute("data-product");

            localStorage.setItem("favoriteProduct", product);

            document.getElementById("favoriteMessage").textContent =
                "Your favorite is saved: " + product;
        });
    });

    const savedFavorite = localStorage.getItem("favoriteProduct");

    if (savedFavorite) {
        document.getElementById("favoriteMessage").textContent =
            "Your saved favorite is: " + savedFavorite;
    }
});
