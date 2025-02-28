import { HeaderContainer } from "./styles";
import Cover from "../../assets/cover.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Cover} alt="" />
    </HeaderContainer>
  );
}
