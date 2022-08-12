"use strict";

export function makeHeader(app) {
  const headerEl = document.createElement("header");
  headerEl.className = "header";
  headerEl.innerHTML = `
  <div id="container">
  <h1>Header</h1>
  <p id="subtitle">More header</p>
  </div>
  `;
  document.body.append(headerEl);
}
