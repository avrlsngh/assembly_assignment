import { get, map } from "lodash";
import React from "react";
import RepoCard from "./RepoCard.component";

export default function RepoList({ repoCollection }) {
  console.log("repo collection: ", repoCollection);
  return (
    <div className="repoListContainer">
      {map(repoCollection, (repo) => (
        <RepoCard
          fullName={get(repo, "name", "")}
          createdAt={get(repo, "created_at", "")}
          forks={get(repo, "forks", 0)}
          issues={get(repo, "open_issues", 0)}
          watchers={get(repo, "watchers", 0)}
          URL={get(repo, "html_url", "")}
          id={get(repo, "id", 0)}
        />
      ))}
    </div>
  );
}
