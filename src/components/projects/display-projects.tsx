import { For, type Accessor } from "solid-js";
import type { FetchProgressStatus, GitHubRepository } from "./projects";
import Link from "../Link/Link.jsx";

function isUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}

function parseDescription(description: string) {
  const segments = description.split(' ');
  return segments.map((segment) => {
    if (isUrl(segment)) {
      return <Link style="not-italic font-mono" href={segment}>{segment}</Link>;
    } else {
      return segment + ' ';
    }
  });
}


export default function DisplayProjects(props: {
  projects: Accessor<GitHubRepository[]>;
  fetchProjectsStatus: Accessor<FetchProgressStatus>;
}) {
  return (
    <>
      {props.fetchProjectsStatus().status === "other" ? (
        <p>{props.fetchProjectsStatus().description}</p>
      ) : (
        <For each={props.projects()}>
          {(project) => (
            <div class="my-2">
              <Link href={project.html_url}>{project.full_name}</Link>
              <p class="italic text-sm">
                {project.description ? parseDescription(project.description) : "No description"}
              </p>
            </div>
          )}
        </For>
      )}
    </>
  );
}
