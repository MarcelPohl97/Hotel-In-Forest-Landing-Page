const tours_section = document.getElementsByClassName("section-tours")[0];

const swipe_Card = (event, tours_side, tours_rotate) => {
    const card_Element = event.target.parentElement.parentElement;
    const card_side = card_Element.querySelector(tours_side);
    card_side.classList.toggle(tours_rotate);
}

tours_section.addEventListener("click", (event) => {
    if(event.target.classList.contains("tours__swipe")) {
        swipe_Card(event, '.tours__front', 'tours__front--rotate')
        swipe_Card(event, '.tours__back', 'tours__back--rotate')
    }
})
