var accordion_header = document.getElementsByClassName("accordion-header");
var i;

function reset(elem) {
    for (j = 0; j < accordion_header.length; j++) {
        if (accordion_header[j] == elem) { }
        else {
            accordion_header[j].classList.remove('active');
            accordion_header[j].nextElementSibling.classList.remove('active');
            accordion_header[j].nextElementSibling.style.maxHeight = null;
        }
    }
}

for (i = 0; i < accordion_header.length; i++) {
    accordion_header[i].onclick = function () {
        // collapse all panels
        reset(this);

        // toggle current panel
        var accordion_content = this.nextElementSibling;
        accordion_content.classList.toggle('active');
        this.classList.toggle('active');

        if (accordion_content.style.maxHeight) {
            accordion_content.style.maxHeight = null;
        } else {
            accordion_content.style.maxHeight = accordion_content.scrollHeight + "px";
        }
    }
}