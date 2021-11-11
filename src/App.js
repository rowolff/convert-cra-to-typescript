import { apiFactory } from "./utils/api";
import { useEffect, useState } from "react";
import { StyledApp, Posts } from "./App.style";
import { Post } from "./components/Post";
import { Pagination } from "./components/Pagination";

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
      <Posts>
        {posts.length > 0 ? (
          <>
            <Pagination
              data={posts}
              RenderComponent={Post}
              title="Blog Posts"
              pageLimit={5}
              dataLimit={10}
            />
          </>
        ) : (
          <h1>No Posts to display</h1>
        )}
      </Posts>
    </StyledApp>
  );
};

export default App;
