import {
  ProfileContainer,
  ProfileInfo,
  ProfileLinks,
  ProfilePhoto,
  ProfileTitle,
} from "./styles";
import Avatar from "../../../../assets/avatar.png";
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <ProfilePhoto src={Avatar} />
        <ProfileInfo>
          <ProfileTitle>
            <h1>Cameron Williamson</h1>
            <NavLink to="/">
              Github
              <ArrowSquareOut size={18} weight="bold" />
            </NavLink>
          </ProfileTitle>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ProfileLinks>
            <span>
              <GithubLogo weight="fill" size={22} />
              Github
            </span>
            <span>
              <Building weight="fill" size={22} />
              Rocketseat
            </span>
            <span>
              <Users weight="fill" size={22} />
              110 seguidores
            </span>
          </ProfileLinks>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  );
}
