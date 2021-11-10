import { apiFactory } from "./utils/api";
import { useEffect, useState } from "react";
import { StyledApp } from "./App.style";
import { Post } from "./components/Post";

const api = apiFactory();

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getPosts()
      .then((fetchedPosts) => setPosts(fetchedPosts.data))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <StyledApp>
      <section>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </section>
    </StyledApp>
  );
};

export default App;
