let retirarBtn = document.getElementById("retirar");

retirarBtn.addEventListener("click", function () {
    let chave = document.getElementById("chave").value;
    console.log("chave = ", chave);
    if (chave === "papainoelvelhobatuta") {
        let presente = document.getElementById("presente");
        presente.innerHTML = `
        <p class="fw-5 bg-dark text-light rounded my-3 p-3">Você acabou de ganhar 6 meses de spotify e R$50,00 na App Store para gastar com Apple TV+, iTunes e o que mais tiver para fazer lá! Mande um "salve natalina" para seu namorado e ele te dará os códigos dos gift cards.</p>
        <img src="./public/figures/dancing-santa-dance-off.gif" height="300px">
        `;
    }
});