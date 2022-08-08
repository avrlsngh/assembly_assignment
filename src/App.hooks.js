import { isEmpty } from "lodash";
import { Octokit } from "octokit";
import { GITHUB_ACCESS_TOKEN } from "./constants";

export default async function useFetchGithubRepos(orgnizationName, pageSize) {
  const octokit = new Octokit({
    auth: GITHUB_ACCESS_TOKEN,
  });

  if (isEmpty(orgnizationName)) return null;

  const { data: repoCollection } = await octokit.request(
    "GET /orgs/{org}/repos?per_page={pageSize}",
    {
      org: orgnizationName,
      pageSize,
    }
  );

  return repoCollection;
}
