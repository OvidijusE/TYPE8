import { useEffect, useState } from 'react';

// Postu saraso komponentas kuris atvaizduoja pirmus 15 postu
//  * is https://jsonplaceholder.typicode.com/posts
//  * atvaizuuosim postus paprastu korteliu pavidalu

export default function PostsList() {
  const [postsArray, setPostsArray] = useState([]);
  async function getPosts() {
    const LIMIT_POST = 15;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT_POST}`);
    const dataInJS = await resp.json();
    setPostsArray(dataInJS);
  }
  useEffect(() => {
    getPosts();
  });
  return (
    <ol>
      {postsArray.map((pObj) => (
        <li key={pObj.id}>{pObj.title}</li>
      ))}
    </ol>
  );
}
