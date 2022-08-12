"use strict";

const users = [
  {
    id: 1,
    username: "Bob",
    password: "secret123",
    department: "A",
    avatar: "2.jpg",
    online: false,
  },
  {
    id: 2,
    username: "Jill",
    password: "secret456",
    department: "B",
    avatar: "2.jpg",
    online: true,
  },
  {
    id: 3,
    username: "James",
    password: "secret789",
    department: "B",
    avatar: "3.jpg",
    online: true,
  },
  {
    id: 4,
    username: "Mike",
    password: "secret111",
    department: "C",
    avatar: "4.jpg",
    online: false,
  },
];

// parasyti funkcija kuri atrenka visus online esancius vartotojus
// const online = users.filter((userObj) => userObj.online === true);
// console.table("online ===", online);

// funkcija kuri grazina
const online = onlineUsers();
console.table(online);
function onlineUsers() {
  return users.filter((userObj) => userObj.online === true);
}

// 2. su funkcija atrinkti B ir C departameto userius

// const depBirC = users.filter((letter) => letter.department === "B" || letter.department === "C");
// console.log("depBirC ===", depBirC);

function departmentUsers(arr) {
  const filteredUsers = arr.filter((uObj) => uObj.department === "B" || uObj.department === "C");
  return filteredUsers;
}
// array.includes()
// extra
const bcUsers = departmentUsers(users, ["B", "C"]);
const aUsers = departmentUsers(users, ["A"]);
console.table(bcUsers);

// 3. parasyti funkcija kuri sugeneruoja htmle nuotrauku galerija is uzer paveikleliu, su username pavadinimu
// function nuotraukos() {}

// const figEl = document.createElement("figure");
// document.body.append("figure");
// const imScr = document.createElement("img");
// figEl.insertAdjacentElement("afterbegin", imScr);

// 3.1 parasyti funkcija kur gavusi toki objekta
// const ul = {
//   id: 1,
//   username: "Bob",
//   password: "secret123",
//   department: "A",
//   avatar: "2.jpg",
//   online: false,
// };

// pagamina

/* <figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure> */

// 3.2 susikuriam div su klase 'grid'. ir tada funkcija makeCards(arr, dest) kuri suka cikla per arr

// ir gamina korteles su auksciau aprasyta funkcija

// 4. parasyti funkcija kuriai paduodam id ir ji grazina objekta kurio id sutampa su duotu. jei toks nerandamas tai grazina

// {
//   found: false;
//   msg: 'user not found';
// }

// 5. Parasyti funkcija kuriai paduodam username ir password.

// 5.1 jei pasword ir username sutampa tai iskonsolinam loggin success

// 5.2 jei pasword ir username nesutampa tai iskonsolinam loggin fail

// 5.3 jei pasword ir username sutampa tai padarom vartotoja kad jis butu online

// pagamina elementa
function makeImg(userObj) {
  const imgEl = document.createElement("img");
  imgEl.className = "user-img";
  imgEl.src = `img/${userObj.avatar}`;
  imgEl.alt = `Image of ${userObj.username}`;
  document.body.append(imgEl);
}

makeImg(users[0]);
makeImg(users[1]);
