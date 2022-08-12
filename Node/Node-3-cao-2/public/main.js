"use strict";

const base_url = "http://localhost:3002/";

const sendForm = document.querySelector(".send-form");

sendForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newNameObj = {
    name: sendForm.elements.name.value.trim(""),
    lastName: sendForm.elements.lastName.value.trim(""),
  };
  console.log("newNameObj ===", newNameObj);
  try {
    const resp = await fetch(`${base_url}api/names`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNameObj),
    });
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }
    sendForm.reset();
    const data = await resp.json();
  } catch (error) {
    throw new Error(`Could not create object: ${error}`);
  }
});
