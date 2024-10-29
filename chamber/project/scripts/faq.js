var acc = document.getElementsByClassName(".accordion");

var i;

for (i = 0; i < acc.length ; 1++) {
    acc[i].addEventListener("click", function() {
        this.slassList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block") {
            pannel.style.display = "none";
        } else(pannel.style.display = "block")
    });
}