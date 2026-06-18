const cursos = [
    ["Engenharia Civil", "Exatas"],
    ["Ciência da Computação", "Exatas"],
    ["Matemática", "Exatas"],

    ["Direito", "Humanas"],
    ["História", "Humanas"],
    ["Geografia", "Humanas"],

    ["Medicina", "Natureza"],
    ["Biologia", "Natureza"],
    ["Enfermagem", "Natureza"],

    ["Letras", "Linguagens"],
    ["Jornalismo", "Linguagens"],
    ["Publicidade", "Linguagens"]
];

const area = document.getElementById("area");
const resultado = document.getElementById("resultado");

area.addEventListener("change", function () {

    resultado.innerHTML = "";

    const filtrados = cursos.filter(
        curso => curso[1] === area.value
    );

    if (filtrados.length === 0) {
        resultado.innerHTML = "<p>Nenhum curso encontrado.</p>";
        return;
    }

    filtrados.forEach(curso => {
        const p = document.createElement("p");
        p.textContent = curso[0];
        resultado.appendChild(p);
    });

});