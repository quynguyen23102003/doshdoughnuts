

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const image = urlParams.get("image");
    const title = urlParams.get("title");
    const price = urlParams.get("price");

    const productImage = document.querySelector(".image img");
    const productTitle = document.querySelector(".content h1");
    const productPrice = document.querySelector(".content .price");

    productImage.src = image;
    productImage.alt = title;
    productTitle.textContent = title;
    productPrice.textContent += price;
});
document.addEventListener("DOMContentLoaded", function () {
    const productLinks = document.querySelectorAll(".product a");
    productLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chuyển trang mặc định
            const productDetailURL = link.getAttribute("href");
            window.location.href = productDetailURL;
        });
    });
});