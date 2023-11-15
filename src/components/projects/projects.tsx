import { createEffect, createSignal } from 'solid-js';
import DisplayProjects from './display-projects';

export interface GitHubRepository {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
}

export type FetchProgressStatus = {
    status: 'success' | 'other';
    description: string;
}

const getProjects = async (pageNumber: number) => {
    const response = await fetch(`/resume/projects/${pageNumber}.json`);
    let projects: GitHubRepository[]
    let statusText = response.statusText
    if (response.status !== 200){
        projects = []
        statusText = `Error when fetching GitHub data:. Status code ${response.status}: ${statusText}`
    } else {
        projects = (await response.json());
    }
    return { statusCode: response.status, statusText, projects }
}

export default function Projects() {
    const [pageNumber, setPageNumber] = createSignal(Number(localStorage.getItem("page")) || 1);
    const [fetchProjectStatus, setFetchProjectStatus] = createSignal<FetchProgressStatus>(
        { status: 'other', description: 'Initial Load' }
    );
    const [projects, setProjects] = createSignal<GitHubRepository[]>([]);

    createEffect(async () => {
        setFetchProjectStatus({
            status: 'other',
            description: 'Fetching Projects data'
        })
        setProjects([])
        localStorage.setItem('page', pageNumber().toString());
        const { statusCode, statusText, projects } = await getProjects(pageNumber())
        if (statusCode !== 200) {
            setFetchProjectStatus({
                status: 'other',
                description: statusText
            })
        } else if (projects.length === 0) {
            setFetchProjectStatus({
                status: 'other',
                description: "No Response"
            })
        } else {
            setFetchProjectStatus({
                status: 'success',
                description: projects.length.toString()
            })
            setProjects(projects)
        }
    })

    // createEffect(() => console.log(pageNumber()))
    // createEffect(() => console.log(projects()))

    const incrementPage = () => setPageNumber(pageNumber() + 1);
    const decrementPage = () => setPageNumber(Math.max(pageNumber() - 1, 1));

    return <>
        <div class='flex flex-row justify-between my-2'>
            <h2 class="text-xl font-semibold my-auto">Projects</h2>
            <div class="flex border border-gray-200 text-sm">
                <button class="p-2 block hover:bg-gray-200 disabled:bg-gray-300" onClick={decrementPage} disabled={pageNumber() === 1}>{"<"}</button>
                <p class="p-2 block w-16 text-center">Page {pageNumber()}</p>
                <button class="p-2 block hover:bg-gray-200 disabled:bg-gray-300" onClick={incrementPage} disabled={fetchProjectStatus().status === 'other'}>{">"}</button>
            </div>
        </div>
        <DisplayProjects projects={projects} fetchProjectsStatus={fetchProjectStatus} />
    </>
}