import { useNavigate } from "react-router-dom";
import { Post, PostsContainer } from "./styles";

export function PostsList() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/post");
  }

  return (
    <PostsContainer>
      <Post onClick={handleOnClick}>
        <div>
          <h2>JavaScript data types and data structures</h2>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </Post>
      <Post onClick={handleOnClick}>
        <div>
          <h2>JavaScript data types and data structures</h2>
          <span>Há 1 dia</span>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </Post>
    </PostsContainer>
  );
}
