let aktualnyJezyk = localStorage.getItem("jezyk") || "pl";

const btnLosuj = document.getElementById("btn-losuj");
const listaTagowContainer = document.getElementById("lista-tagow");
const appContainer = document.getElementById("app");

function zmienJezyk(nowyJezyk) {
  aktualnyJezyk = nowyJezyk;
  localStorage.setItem("jezyk", nowyJezyk);
  
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === nowyJezyk);
  });

  document.getElementById("ui-tytul").textContent = tekstyUI[aktualnyJezyk].tytulStrony;
  document.getElementById("ui-podtytul").textContent = tekstyUI[aktualnyJezyk].podtytul;
  btnLosuj.textContent = tekstyUI[aktualnyJezyk].btnLosuj;

  generujPasekTagow();
  losujCiekawostke();
}

function generujPasekTagow() {
  const unikalneTagi = new Set();

  bazaWiedzy.forEach(wpis => {
    wpis.tagi[aktualnyJezyk].forEach(tag => unikalneTagi.add(tag));
  });

  listaTagowContainer.innerHTML = "";
  unikalneTagi.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = `#${tag}`;
    tagEl.addEventListener("click", () => filtrujPoTagu(tag));
    listaTagowContainer.appendChild(tagEl);
  });
}

function stworzTagiHtml(tagi) {
  return tagi
    .map(tag => `<span class="tag" onclick="filtrujPoTagu('${tag}')">#${tag}</span>`)
    .join(" ");
}

function losujCiekawostke() {
  const losowyWpis = bazaWiedzy[Math.floor(Math.random() * bazaWiedzy.length)];
  const ciekawostki = losowyWpis.ciekawostki[aktualnyJezyk];
  const losowaCiekawostka = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];

  appContainer.innerHTML = `
    <article class="card fade-in">
      <div class="card-img-wrapper">
        <img class="card-img" src="${losowyWpis.zdjecie}" alt="${losowyWpis.tytul[aktualnyJezyk]}">
      </div>
      <div class="card-content">
        <h2 class="card-title">${losowyWpis.tytul[aktualnyJezyk]}</h2>
        <div class="card-fact">${losowaCiekawostka}</div>
        <div class="card-tags">
          ${stworzTagiHtml(losowyWpis.tagi[aktualnyJezyk])}
        </div>
      </div>
    </article>
  `;
}

function filtrujPoTagu(wybranyTag) {
  const pasujaceWpisy = bazaWiedzy.filter(wpis =>
    wpis.tagi[aktualnyJezyk].includes(wybranyTag)
  );

  if (pasujaceWpisy.length === 0) return;

  let html = `
    <div class="filter-info fade-in">
      <span>${tekstyUI[aktualnyJezyk].filtrujeszPo} <strong>#${wybranyTag}</strong> (${pasujaceWpisy.length})</span>
      <button onclick="losujCiekawostke()">${tekstyUI[aktualnyJezyk].wrocDoLosowania}</button>
    </div>
  `;

  if (pasujaceWpisy.length === 1) {
    const wpis = pasujaceWpisy[0];
    const listaCiekawostek = wpis.ciekawostki[aktualnyJezyk]
      .map(fakt => `<li>${fakt}</li>`)
      .join("");

    html += `
      <article class="card fade-in">
        <div class="card-img-wrapper">
          <img class="card-img" src="${wpis.zdjecie}" alt="${wpis.tytul[aktualnyJezyk]}">
        </div>
        <div class="card-content">
          <h2 class="card-title">${wpis.tytul[aktualnyJezyk]}</h2>
          <ul class="facts-list">
            ${listaCiekawostek}
          </ul>
          <div class="card-tags">
            ${stworzTagiHtml(wpis.tagi[aktualnyJezyk])}
          </div>
        </div>
      </article>
    `;
  } else {
    pasujaceWpisy.forEach(wpis => {
      const przykladowaCiekawostka = wpis.ciekawostki[aktualnyJezyk][0];

      html += `
        <article class="card fade-in">
          <div class="card-img-wrapper">
            <img class="card-img" src="${wpis.zdjecie}" alt="${wpis.tytul[aktualnyJezyk]}">
          </div>
          <div class="card-content">
            <h2 class="card-title">${wpis.tytul[aktualnyJezyk]}</h2>
            <div class="card-fact">${przykladowaCiekawostka}</div>
            <div class="card-tags">
              ${stworzTagiHtml(wpis.tagi[aktualnyJezyk])}
            </div>
          </div>
        </article>
      `;
    });
  }

  appContainer.innerHTML = html;
}

btnLosuj.addEventListener("click", losujCiekawostke);
zmienJezyk(aktualnyJezyk);
