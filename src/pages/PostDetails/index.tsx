import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import {
  PostContainer,
  PostHeader,
  PostHeaderActions,
  PostHeaderLinks,
} from "./styles";

export function PostDetails() {
  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderActions>
          <span>
            <CaretLeft size={22} weight="bold" />
            Voltar
          </span>
          <span>
            Ver no Github
            <ArrowSquareOut size={22} weight="bold" />
          </span>
        </PostHeaderActions>
        <h1>JavaScript data types and data structures</h1>
        <PostHeaderLinks>
          <span>
            <GithubLogo weight="fill" size={22} />
            Github
          </span>
          <span>
            <CalendarDots weight="fill" size={22} />
            Há 1 dia
          </span>
          <span>
            <ChatCircle weight="fill" size={22} />
            110 seguidores
          </span>
        </PostHeaderLinks>
      </PostHeader>
    </PostContainer>
  );
}
