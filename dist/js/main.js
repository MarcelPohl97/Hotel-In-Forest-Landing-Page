const tours_section = document.getElementsByClassName("section-tours")[0];

tours_section.addEventListener("click", (event) => {
    if(event.target.classList.contains("tours__details")) {
        alert("Hello World");
    }
})
