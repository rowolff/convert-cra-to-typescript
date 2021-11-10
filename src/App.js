import "./App.css";
import { apiFactory } from "./utils/api";
import { useEffect, useState } from "react";
import { StyledApp } from "./App.style";

const api = apiFactory();

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getPosts()
      .then((fetchedPosts) => setPosts(fetchedPosts))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <StyledApp>
      <section>
        <h1>Blog Posts</h1>
      </section>
    </StyledApp>
  );
}

export default App;
