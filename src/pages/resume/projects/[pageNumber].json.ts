import type { APIContext } from "astro";

export const prerender = false;

export async function GET({ params, locals }: APIContext): Promise<Response> {
    const pageNumber = Number(params.pageNumber) || 1;

    const PROJECTS_KV = locals.runtime.env["alifyasa.dev"]
    const KV_KEY = `page/${pageNumber}`

    try {
        LOG("Getting cached data")
        const cachedData = await PROJECTS_KV.get(KV_KEY);

        if (cachedData) {
            return new Response(cachedData);
        }

        LOG("Fetching data from GitHub")
        const [allRepos, publicRepos] = await Promise.all([
            getGithubAllRepos(pageNumber),
            getGithubPublicRepos(pageNumber)
        ]);

        LOG("Parsing responses")
        const repositories = allRepos.status === 200
            ? await parseRepositories(allRepos)
            : await parseRepositories(publicRepos);

        LOG("Caching responses")
        await PROJECTS_KV.put(KV_KEY, JSON.stringify(repositories), {
            // value is valid for 24 hours
            expirationTtl: 24 * 60 * 60 // in seconds
        });

        return new Response(JSON.stringify(repositories));
    } catch (err) {
        console.log(`Projects - Error ${JSON.stringify(err)}`);

        return new Response(null, {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}

interface GitHubRepository {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
}

const getGithubAllRepos = (pageNumber: number) => fetch(
    `https://api.github.com/user/repos?per_page=5&page=${pageNumber}&sort=pushed`,
    {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${import.meta.env.GITHUB_PAT}`,
            "X-GitHub-Api-Version": "2022-11-28",
            'User-Agent': 'request'
        },
    },
);

const getGithubPublicRepos = (pageNumber: number) => fetch(
    `https://api.github.com/users/alifyasa/repos?per_page=5&page=${pageNumber}&sort=pushed`,
    {
        headers: {
            'User-Agent': 'request'
        }
    }
);

async function parseRepositories(response: Response): Promise<GitHubRepository[]> {
    const repositories: GitHubRepository[] = await response.json();

    return repositories.map(({ name, full_name, html_url, description, topics }) => ({
        name,
        full_name,
        html_url,
        description,
        topics
    }));
}

const LOG = (s: string) => console.log(`[Projects] ${s}`)