export interface ProjectQuery {
    page: number;
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const pageNumber = Math.max(Number(query['page']) || 1, 1)
    const perPage = Math.max(Number(query['perPage']) || 5, 5)

    let repositories = await getRepositoriesFromGithub()
    const repoNumber = Math.min(repositories.length, pageNumber * perPage)
    const isLastPage = repoNumber === repositories.length
    repositories = repositories.slice((Math.floor(repositories.length / perPage) * pageNumber - 1) * perPage, repoNumber)

    return {
        pageNumber,
        perPage,
        isLastPage,
        repositories
    }
})

interface GitHubRepository {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
}

const getRepositoriesFromGithub = async () => {

    const pageNumber = 1
    const perPage = 30

    const today = new Date();
    const lastYear = new Date(
        today.getFullYear() - 1,
        today.getMonth(),
        today.getDate(),
        today.getHours(),
        today.getMinutes(),
        today.getSeconds(),
        today.getMilliseconds()
    );

    const lastYearISO = lastYear.toISOString();

    const [allRepos, publicRepos] = await Promise.all([
        getGithubAllRepos(pageNumber, perPage, lastYearISO),
        getGithubPublicRepos(pageNumber, perPage),
    ]);

    const repositories =
        allRepos.status === 200
            ? await parseRepositories(allRepos)
            : await parseRepositories(publicRepos);

    return repositories
}

const getGithubAllRepos = (pageNumber: number, perPage: number, since: string) =>
    fetch(
        `https://api.github.com/user/repos?per_page=${perPage}&page=${pageNumber}&sort=pushed&since=${since}`,
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${process.env.GITHUB_PAT}`,
                "X-GitHub-Api-Version": "2022-11-28",
                "User-Agent": "request",
            },
        },
    );

const getGithubPublicRepos = (pageNumber: number, perPage: number) =>
    fetch(
        `https://api.github.com/users/alifyasa/repos?per_page=${perPage}&page=${pageNumber}&sort=pushed`,
        {
            headers: {
                "User-Agent": "request",
            },
        },
    );

async function parseRepositories(
    response: Response,
): Promise<GitHubRepository[]> {
    const repositories: GitHubRepository[] = await response.json();

    return repositories.map(
        ({ name, full_name, html_url, description, topics }) => ({
            name,
            full_name,
            html_url,
            description,
            topics,
        }),
    );
}
