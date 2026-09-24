const menuButton = document.querySelector(".menu-button");

const navigation = document.querySelector(".navigation");

const navigationLinks = document.querySelectorAll(".navigation a");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});