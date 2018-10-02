
var contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", function() {
    contactButton.innerHTML = "cclub@mail.gvsu.edu";
    contactButton.style.textTransform = "none";
    window.getSelection().selectAllChildren(contactButton); //selects text for user
});

var aboutButton = document.querySelector("#about");
var cover = document.querySelector("#about-cover");
aboutButton.addEventListener("click", function() {
    cover.style.visibility = "visible"
});

cover.addEventListener("click", function() {
    if(window.innerWidth > 900) {
        cover.style.visibility = "hidden";
    }
});


