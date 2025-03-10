import React, { createContext, useState } from "react";
import { api } from "../lib/axios";

interface IssuesProviderProps {
  children: React.ReactNode;
}

interface Issue {
  title: string;
  body: string;
  updated_at: string;
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  html_url: string;
  followers: number;
}

interface IssuesContextType {
  issues: Issue[];
  getIssuesList: () => Promise<void>;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState([]);

  async function getIssuesList() {
    await api
      .get("search/issues", {
        params: {
          q: `%20repo:rocketseat-education/reactjs-github-blog-challenge`,
        },
      })
      .then((res) => setIssues(res.data.items));
  }

  return (
    <IssuesContext.Provider value={{ issues, getIssuesList }}>
      {children}
    </IssuesContext.Provider>
  );
}
