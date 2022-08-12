const express = require("express");
const cors = require("cors");

// import is config
const { port } = require("./config");
const { posts } = require("./data/db");
const { findById } = require("./helper/helper");

const app = express();

// MiddleWare prie pirma route
app.use(cors()); // kad nebutu CORS error jungiantis is front
app.use(express.json()); // backendas gali matyti atkoduota json formatu atsiustus duomenis

// route
app.get("/", (request, response) => {
  response.json("Hello world");
});

// posts routes
app.get("/api/posts", postsController);

function postsController(request, response) {
  response.json(posts);
}

app.get("/api/posts/3", (request, response) => {
  const postId = 3;
  const found = findById(posts, postId);
  const ats = found === false ? "User not found" : found;
  response.json(found);
});

// siusti
app.post("/api/posts", (request, response) => {
  const newPostObj = request.body;
  console.log("body ===", newPostObj);
  //   idedam nauja objekta i masyva
  //   uzd1 - generuoti didejanti id ir prideti ji prie newPostObj
  posts.push(newPostObj);
  response.status(201).json({
    success: true,
    msg: "Post created",
  });
});

app.listen(port, () => console.log("Express is online on port:", port));
