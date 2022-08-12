const headerEl = document.getElementById("header");

const headerEl2 = document.querySelector("#header");
headerEl.innerHTML += "<h1>main title</h1>";

const h2FirstEl = document.querySelector("header h2:first-child");
h2FirstEl.innerHTML = "Pavyko";

// article

const articleH2El = document.querySelector("article h2:first-child");
articleH2El.innerHTML = "Nauja eilute";

// ul

const ulEl = document.querySelector("ul li:nth-of-type(3)");
ulEl.innerHTML = `<button onclick="alert('you are well')">click me</button>`;

/*

el  <div id="visas"></div>

sudeti skaicius nuo 1 iki 10. kiekvieno sudejimo zingsnio rezultata sugeneruoti

rikiuoto saraso pavidalu



*/

const divEl = document.querySelector("#visas");
divEl.innerHTML = `<ol><li>Pirmas</li><li>Antras</li><li>Trecias</li><li>Ketvirtas</li><li>Penkteas</li><li>Sestas</li><li>Septintas</li><li>Astuntas</li><li>Devintas</li><li>Destimas</li></ol>`;
