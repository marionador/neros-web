const fixed = document.getElementById("fixed");
fixed.addEventListener(
    "click", 
    () => { copyInClipboard(fixed.innerText) }
);

const whatsapp = document.getElementById("whatsapp");
whatsapp.addEventListener(
    "click", 
    () => { copyInClipboard(whatsapp.innerText) }
);

function copyInClipboard(text) {
    text = text.replaceAll(" ", "");
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Texto copiado al portapapeles: ' + text)
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })
}

document.getElementById("goToTopLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});