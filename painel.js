const radios = document.getElementsByName("especial");
const campoExtra = document.getElementById("campoExtra");

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        if (radio.value === "sim" && radio.checked) {
            campoExtra.style.display = "block";
        } else if (radio.value === "nao" && radio.checked) {
            campoExtra.style.display = "none";
        }

    });

});

document.getElementById("btn").addEventListener("click", () => {

    const mensagem = document.getElementById("mensagem");

    const lingua = document.getElementById("lingua").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const necessidade = document.getElementById("necessidade").value;

    mensagem.innerHTML = "";

    if (lingua === "" || estado === "" || cidade === "") {
        mensagem.className = "erro";
        mensagem.innerHTML = "Preencha todos os campos.";
        return;
    }

    if (campoExtra.style.display === "block" && necessidade === "") {
        mensagem.className = "erro";
        mensagem.innerHTML = "Informe a necessidade.";
        return;
    }

    mensagem.className = "sucesso";
    mensagem.innerHTML =
        "Inscrição realizada para a prova de " + lingua + "!";

    document.getElementById("lingua").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("necessidade").value = "";

    radios.forEach(radio => {
        radio.checked = false;
    });

    campoExtra.style.display = "none";

});