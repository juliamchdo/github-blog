import {
  ProfileContainer,
  ProfileInfo,
  ProfileLinks,
  ProfilePhoto,
  ProfileTitle,
} from "./styles";
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface User {
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  html_url: string;
  followers: number;
}

export function Profile() {
  const USER_NAME = "juliamchdo";
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    await api.get(`users/${USER_NAME}`).then((res) => {
      setUser(res.data);
    });
  }

  return (
    <ProfileContainer>
      <div>
        <ProfilePhoto src={user?.avatar_url} />
        <ProfileInfo>
          <ProfileTitle>
            <h1>{user?.name}</h1>
            <NavLink to={user?.html_url ?? "/"}>
              Github
              <ArrowSquareOut size={18} weight="bold" />
            </NavLink>
          </ProfileTitle>
          <p>{user?.bio}</p>

          <ProfileLinks>
            <span>
              <GithubLogo weight="fill" size={22} />
              Github
            </span>
            {user?.company && (
              <span>
                <Building weight="fill" size={22} />
                {user?.company}
              </span>
            )}
            <span>
              <Users weight="fill" size={22} />
              {user?.followers} seguidores
            </span>
          </ProfileLinks>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  );
}
