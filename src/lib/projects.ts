import type { GitHubRepo } from '../types'

export async function getGitHubRepos(repoIds: number[]): Promise<GitHubRepo[]> {
    const response = await fetch('https://api.github.com/users/PentSec/repos')
    const repos = await response.json()

    const filteredRepos: GitHubRepo[] = repos.filter((repo: GitHubRepo) =>
        repoIds.includes(repo.id)
    )

    return filteredRepos
}
