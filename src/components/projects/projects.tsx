import { createEffect, createSignal } from 'solid-js';

interface ProjectsResponse {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
}

const getProjects = async (pageNumber: number) => {
    const response = await fetch(`/resume/projects/page-${pageNumber}.json`);
    const projects: ProjectsResponse[] = await response.json();
    return projects
}

export default function Projects() {
    const [pageNumber, setPageNumber] = createSignal(Number(localStorage.getItem("page")) || 1);
    const [projects, setProjects] = createSignal<ProjectsResponse[] | null>(null);

    createEffect(async () => {
        setProjects(null)
        console.log("A")
        localStorage.setItem('page', pageNumber().toString());
        setProjects(await getProjects(pageNumber()))
    })

    createEffect(( ) => console.log(pageNumber()))

    return <>
        <h2 class="text-xl font-semibold my-2">Projects</h2>
        {
            projects() === null ? (<p>Loading</p>) :
                projects()?.map((p) => (
                    <>
                        <h1>{p.full_name}</h1>
                        <p class="mb-4">{p.description}</p>
                    </>
                ))
        }

        <button onClick={() => setPageNumber(pageNumber() + 1)}>Next Page</button>
        <button onClick={() => setPageNumber(pageNumber() - 1)}>Prev Page</button>
    </>
}