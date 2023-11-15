interface GitHubRepository {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
}

const getGithubAllRepos = (pageNumber: number) => fetch(
    `https://api.github.com/user/repos?per_page=5&page=${pageNumber}`,
    {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${import.meta.env.GITHUB_PAT}`,
            "X-GitHub-Api-Version": "2022-11-28",
        },
    },
);

const getGithubPublicRepos = (pageNumber: number) => fetch(
    `https://api.github.com/users/malifpy/repos?per_page=5&page=${pageNumber}`,
);

export async function GET({ params }: { params: { pageNumber: number } }) {
    console.log(`Projects - URL: ${JSON.stringify(params)}`)
    const pageNumber = Number(params.pageNumber) || 1
    console.log(`Projects - Page ${pageNumber}`)

    const [allRepos, publicRepos] = await Promise.all([
        getGithubAllRepos(pageNumber),
        getGithubPublicRepos(pageNumber)
    ]);

    console.log(`Projects - GitHub All Repositories status code: ${allRepos.status}`)
    console.log(`Projects - GitHub Public Repositories status code: ${publicRepos.status}`)
    try {
        if (allRepos.status === 200) {
            let repositories: GitHubRepository[] = (await allRepos.json())
            repositories = repositories.map(({ name, full_name, html_url, description, topics }) => ({ name, full_name, html_url, description, topics }))
            return new Response(JSON.stringify(repositories));
        } else {
            let repositories: GitHubRepository[] = (await publicRepos.json())
            repositories = repositories.map(({ name, full_name, html_url, description, topics }) => ({ name, full_name, html_url, description, topics }))
            return new Response(JSON.stringify(repositories));
        }
    } catch (err: unknown) {
        console.log(`Projects - Error ${JSON.stringify(err)}`)
        return new Response(null, {
            status: publicRepos.status,
            statusText: publicRepos.statusText
        })
    }
}