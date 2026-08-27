const btnLosuj = document.getElementById("btn-losuj");
const listaTagowContainer = document.getElementById("lista-tagow");
const appContainer = document.getElementById("app");

function generujPasekTagow() {
  const unikalneTagi = new Set();

  bazaWiedzy.forEach(wpis => {
    wpis.tagi.forEach(tag => {
      unikalneTagi.add(tag);
    });
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
  const losowaCiekawostka = losowyWpis.ciekawostki[
    Math.floor(Math.random() * losowyWpis.ciekawostki.length)
  ];

  // Stworzenie karty
  appContainer.innerHTML = `
    <article class="card">
      <div class="card-img-wrapper">
        <img class="card-img" src="${losowyWpis.zdjecie}" alt="${losowyWpis.tytul}">
      </div>
      <div class="card-content">
        <h2 class="card-title">${losowyWpis.tytul}</h2>
        <div class="card-fact">${losowaCiekawostka}</div>
        <div class="card-tags">
          ${stworzTagiHtml(losowyWpis.tagi)}
        </div>
      </div>
    </article>
  `;
}

function filtrujPoTagu(wybranyTag) {
  const pasujaceWpisy = bazaWiedzy.filter(wpis => wpis.tagi.includes(wybranyTag));

  if (pasujaceWpisy.length === 0) return;

  let html = `
    <div class="filter-info">
      <span>Filtrujesz po: <strong>#${wybranyTag}</strong> (${pasujaceWpisy.length})</span>
      <button onclick="losujCiekawostke()">🎲 Wróć do losowania</button>
    </div>
  `;

  if (pasujaceWpisy.length === 1) {
    const wpis = pasujaceWpisy[0];
    const listaCiekawostek = wpis.ciekawostki
      .map(fakt => `<li>${fakt}</li>`)
      .join("");

    html += `
      <article class="card">
        <div class="card-img-wrapper">
          <img class="card-img" src="${wpis.zdjecie}" alt="${wpis.tytul}">
        </div>
        <div class="card-content">
          <h2 class="card-title">${wpis.tytul}</h2>
          <ul class="facts-list">
            ${listaCiekawostek}
          </ul>
          <div class="card-tags">
            ${stworzTagiHtml(wpis.tagi)}
          </div>
        </div>
      </article>  
    `;
  } else {
    pasujaceWpisy.forEach(wpis => {
      const przykladowaCiekawostka = wpis.ciekawostki[0];

      html += `
        <article class="card">
          <div class="card-img-wrapper">
            <img class="card-img" src="${wpis.zdjecie}" alt="${wpis.tytul}">
          </div>
          <div class="card-content">
            <h2 class="card-title">${wpis.tytul}</h2>
            <div class="card-fact">${przykladowaCiekawostka}</div>
            <div class="card-tags">
              ${stworzTagiHtml(wpis.tagi)}
            </div>
          </div>
        </article>
      `;
    });
  }

  appContainer.innerHTML = html;
}

btnLosuj.addEventListener("click", losujCiekawostke);

generujPasekTagow();
losujCiekawostke();