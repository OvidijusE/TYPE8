"use strict";

const base_url = "https://jsonplaceholder.typicode.com";
// parsiusti ir isskonsolinti 100 postu is

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  //   .then((data) => console.log("100 posts ===", data))
  .catch((error) => console.log(error.message));

// get 50 comments

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => console.log("50 comments ===", data.slice(0, 50)))
  .catch((err) => console.log(err));

// get all users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log("all users ===", data))
  .catch((err) => console.warn(err));

// get all comments of post 5

fetch(`${base_url}/comments`)
  .then((response) => response.json())
  .then((data) => {
    const post5Comments = data.filter((uObj) => uObj.postId === 5);
    console.log("post5Comments ===", post5Comments);
  })
  .catch((err) => console.warn(err));

// get all users usernames in an array

fetch(`${base_url}/users`)
  .then((response) => response.json())
  .then((data) => {
    const usernameArray = data.map((uObj) => uObj.username);
    console.log("usernameArray ====", usernameArray);
  })
  .catch((err) => console.warn(err));

// get all users cities in an array

fetch(`${base_url}/users`)
  .then((response) => response.json())
  .then((data) => {
    const userCity = data.map((uObj) => uObj.address.city);
    console.log("userCity ===", userCity);
  })
  .catch((err) => console.warn(err));
