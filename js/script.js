const utilizator = prompt("Introdu numele tău:") || "Vizitator Anonim";
const elementNume = document.getElementById("nume-utilizator");
if (elementNume) elementNume.textContent = utilizator;

const modal = document.getElementById("modal-imagine");
const imagineMarita = document.getElementById("imagine-marita");
const butonInchide = document.querySelector(".inchide");
const listaRecenzii = document.getElementById("lista-recenzii");
const stele = document.querySelectorAll(".stea");
const notaAcordata = document.getElementById("nota-acordata");

document.querySelectorAll(".galerie .card").forEach(card => {
    card.addEventListener("click", function () {
        const img = this.querySelector("img");
        imagineMarita.src = img.src;
        imagineMarita.alt = img.alt;
        modal.classList.add("activ");
        resetRating();
    });
});

function inchideModal() {
    modal.classList.remove("activ");
}

if (butonInchide) butonInchide.addEventListener("click", inchideModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) inchideModal();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") inchideModal();
});

stele.forEach(stea => {
    stea.addEventListener("click", function () {
        const nota = parseInt(this.getAttribute("data-valoare"));
        if (notaAcordata) notaAcordata.textContent = nota;

        stele.forEach(s => {
            s.classList.toggle("activa", parseInt(s.getAttribute("data-valoare")) <= nota);
        });

        const numePoza = imagineMarita.alt || "Fotografie";
        console.log("Încercare salvare pentru:", numePoza, "Nota:", nota);
        salveazaRecenzie(utilizator, numePoza, nota);
    });

    stea.addEventListener("mouseenter", function () {
        const hover = parseInt(this.getAttribute("data-valoare"));
        stele.forEach(s => {
            s.classList.toggle("activa", parseInt(s.getAttribute("data-valoare")) <= hover);
        });
    });
});

document.querySelector(".stele").addEventListener("mouseleave", function () {
    const notaCurenta = parseInt(notaAcordata?.textContent) || 0;
    stele.forEach(s => {
        s.classList.toggle("activa", parseInt(s.getAttribute("data-valoare")) <= notaCurenta);
    });
});

function adaugaRecenzie(nume, poza, nota) {
    const mesajGol = document.querySelector(".mesaj-gol");
    if (mesajGol) mesajGol.remove();

    const data = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.className = "item-recenzie";
    div.innerHTML = `
        <div>
            <span class="recenzie-nume">${nume}</span> 
            <span style="color: #666">a evaluat</span> 
            <span style="color: #eee">${poza}</span>
        </div>
        <div>
            <span class="recenzie-nota">${nota} ★</span>
            <span class="recenzie-data">la ora ${data}</span>
        </div>
    `;
    if (listaRecenzii) listaRecenzii.prepend(div);
}

function resetRating() {
    if (notaAcordata) notaAcordata.textContent = "0";
    stele.forEach(s => s.classList.remove("activa"));
}

document.querySelectorAll(".btn-filtru").forEach(buton => {
    buton.addEventListener("click", function () {
        const activ = document.querySelector(".btn-filtru.active");
        if (activ) activ.classList.remove("active");
        this.classList.add("active");

        const categoria = this.getAttribute("data-categorie");
        document.querySelectorAll(".poza-galerie").forEach(card => {
            const match = categoria === "toate" || card.getAttribute("data-categorie") === categoria;
            card.classList.toggle("ascuns", !match);
        });
    });
});

function salveazaRecenzie(nume, poza, nota) {
    let dateRecenzie = new FormData();
    dateRecenzie.append('nume', nume);
    dateRecenzie.append('poza', poza);
    dateRecenzie.append('nota', nota);

    fetch('salveaza.php', {
        method: 'POST',
        body: dateRecenzie
    })
    .then(response => response.text())
    .then(data => {
        console.log("Răspuns server:", data);
        if (data.includes("Succes")) {
            adaugaRecenzie(nume, poza, nota);
        } else {
            console.error("Serverul a returnat o eroare:", data);
        }
    })
    .catch(error => console.error('Eroare la trimiterea datelor:', error));
}
