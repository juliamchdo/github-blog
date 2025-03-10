import { useNavigate } from "react-router-dom";
import { Post, PostsContainer } from "./styles";
import { useContext, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { IssuesContext } from "../../../../context/IssuesContext";

export function PostsList() {
  const navigate = useNavigate();
  const { getIssuesList, issues } = useContext(IssuesContext);

  function handleOnClick() {
    navigate("/post");
  }

  useEffect(() => {
    getIssuesList();
  }, [getIssuesList]);

  useEffect(() => {
    console.log(issues);
  }, [issues]);

  function formatIssueDate(date: string) {
    const issueDate = new Date(date);
    return formatDistanceToNow(issueDate, {
      locale: ptBR,
      addSuffix: true,
    });
  }

  return (
    <PostsContainer>
      {issues.length > 0 &&
        issues.map((issue) => {
          return (
            <Post key={issue.id} onClick={handleOnClick}>
              <div>
                <h2>{issue.title}</h2>
                <span>{formatIssueDate(issue.updated_at)}</span>
              </div>
              <p>{issue.body}</p>
            </Post>
          );
        })}
    </PostsContainer>
  );
}
