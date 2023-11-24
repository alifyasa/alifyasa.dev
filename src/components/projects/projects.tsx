import { createEffect, createSignal, onMount } from "solid-js";
import DisplayProjects from "./display-projects";

export interface GitHubRepository {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
}

export type FetchProgressStatus = {
  status: "success" | "other";
  description: string;
};

const getProjects = async (pageNumber: number) => {
  const response = await fetch(`/resume/projects/${pageNumber}.json`);
  let projects: GitHubRepository[];
  let statusText = response.statusText;
  if (response.status !== 200) {
    projects = [];
    statusText =
      `Error: Unable to fetch data. Status code ${response.status}` +
      (statusText ? `: ${statusText}` : "");
  } else {
    projects = await response.json();
  }
  return { statusCode: response.status, statusText, projects };
};

export default function Projects() {
  const [pageNumber, setPageNumber] = createSignal(1);

  const [fetchProjectStatus, setFetchProjectStatus] =
    createSignal<FetchProgressStatus>({
      status: "other",
      description: "Loading... Please enable JavaScript to view this content.",
    });

  const [projects, setProjects] = createSignal<GitHubRepository[]>([]);

  onMount(() => {
    const localPageNumber = Number(localStorage.getItem("page")) || 1
    if (localPageNumber !== pageNumber()) {
      setPageNumber(localPageNumber);
    }
  });

  createEffect(async () => {
    setFetchProjectStatus({
      status: "other",
      description: "Fetching project data...",
    });
    setProjects([]);
    localStorage.setItem("page", pageNumber().toString());
    const { statusCode, statusText, projects } =
      await getProjects(pageNumber());
    if (statusCode !== 200) {
      setFetchProjectStatus({
        status: "other",
        description: statusText,
      });
    } else if (projects.length === 0) {
      setFetchProjectStatus({
        status: "other",
        description: "No projects found.",
      });
    } else {
      setFetchProjectStatus({
        status: "success",
        description: `Fetched ${projects.length} projects successfully.`,
      });
      setProjects(projects);
    }
  });

  const incrementPage = () => setPageNumber(pageNumber() + 1);
  const decrementPage = () => setPageNumber(Math.max(pageNumber() - 1, 1));

  return (
    <>
      <div class="flex flex-row justify-between my-2">
        <h2 class="text-xl font-semibold my-auto">Projects</h2>
        <div class="flex border border-gray-200 text-sm">
          <button
            class="p-2 block hover:bg-gray-200 disabled:bg-gray-300"
            onClick={decrementPage}
            disabled={pageNumber() === 1}
          >
            {"<"}
          </button>
          <p class="p-2 block w-16 text-center">Page {pageNumber()}</p>
          <button
            class="p-2 block hover:bg-gray-200 disabled:bg-gray-300"
            onClick={incrementPage}
            disabled={fetchProjectStatus().status === "other"}
          >
            {">"}
          </button>
        </div>
      </div>
      <DisplayProjects
        projects={projects}
        fetchProjectsStatus={fetchProjectStatus}
      />
    </>
  );
}
