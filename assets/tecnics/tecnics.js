const accordionData = [
    { title: "Fisioterapia Deportiva", content: "Tratamiento de patologías que se desarrollan en la práctica deportiva. Entre las lesiones más comunes de esta práctica se encuentran la contractura muscular, sobrecargas, contusiones, elongaciones, distensiones, roturas de fibras, tendinopatías y esguinces." },
    { title: "Masaje Descontracturante", content: "Consiste en eliminar las contracturas que provocamos al realizar nuestra actividad diaria. Sea cual sea la causa de la contractura hay que eliminarla, pues crea una descompensación estructural que va sobrecargando progresivamente el resto del cuerpo." },
    { title: "Drenaje Linfático Manual", content: "Es una técnica de masaje suave e indolora que tiene como objetivo el tratamiento de los disturbios del sistema linfático." },
    { title: "Electroterapia", content: "Consiste en el tratamiento de lesiones y enfermedades mediante la electricidad, aplicada mediante un equipo sanitario sin riesgo de efectos secundarios." },
    { title: "Terapia Miofascial", content: "Técnica utilizada para tratar las disfunciones del sistema miofascial. La fascia es un tejido conectivo duro, elástico y delgado, que envuelve la mayoría de las estructuras dentro del cuerpo humano, incluyendo los músculos." },
    { title: "Vendaje Neuromuscular", content: "Consiste en cintas de algodón con un adhesivo acrílico usadas para tratar lesiones o trastornos físicos." },
    { title: "Vendaje Funcional", content: "Técnica de “inmovilización parcial” que se emplea en lesiones tendinosas, musculares y ligamentosas principalmente. El vendaje limita la movilidad en el sentido del movimiento en que aparece dolor o podría agravarse la lesión, mientras que permite el resto de movimientos de la articulación." },
    { title: "Tratamiento de ATM", content: "Se considera disfunción temporomandibular a los trastornos funcionales del aparato masticatorio que incluyen cualquier alteración en las relaciones de los dientes con sus estructuras. Estas estructuras serán los maxilares, la articulación temporomandibular, los músculos y el paquete vasculonervioso." },
    { title: "Termoterapia", content: "Aplicación de calor para el tratamiento de enfermedades y lesiones." },
    { title: "Crioterapia", content: "Aplicación de frío indicado como tratamiento analgésico en lesiones o trastornos físicos." },
    { title: "Rehabilitación y Postoperatorio", content: "Conjunto de medidas dirigidas a acelerar la convalecencia de los pacientes tras una intervención quirúrgica." },
    { title: "Punción Seca", content: "Técnica semi-invasiva que utiliza la punción con agujas de acupuntura para el tratamiento de la afección músculo-esquelética conocida como Punto Gatillo." },
    { title: "Fisioterapia pediátrica", content: "Disciplina dentro de la fisioterapia que trata las enfermedades que se producen en los bebés y niños, tanto congénitas como adquiridas." },
    { title: "Suelo Pélvico", content: "Se centra en la prevención y el tratamiento de todos los tipos de trastornos funcionales de las regiones abdominal, pélvica y lumbar. Muchas de las afecciones de esta rama están asociadas al embarazo y post-parto." }
];

const accordion = document.getElementById("accordions");

accordionData.forEach((item, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `
        <span>${item.title}</span>
        <span class="arrow-icon icon-expand_more"></span>
    `;

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.textContent = item.content;

    header.addEventListener("click", () => {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "inline";
            header.querySelector('.arrow-icon').style.transform = 'rotate(180deg)';
        } else {
            content.style.display = "none";
            header.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
        }
    });

    accordionItem.appendChild(header);
    accordionItem.appendChild(content);
    accordion.appendChild(accordionItem);
});