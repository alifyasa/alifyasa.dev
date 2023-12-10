<template>
    <div aria-label="Introduction">
        <BaseH1>Hello, World!</BaseH1>
        <BaseParagraph class="mb-4">
            I'm Alif. I study Informatics Engineering in Institut Teknologi Bandung.
        </BaseParagraph>
        <BaseParagraph>
            Lately, I've been interested in web-related topics, especially security.
            See my Try Hack Me profile <div class="inline">
                <BaseLink 
                    href="https://tryhackme.com/p/alifyasa" 
                    color="rust"
                    :without-underline="true"
                    :open-in-new-tab="true"
                >here</BaseLink>
            </div>.
        </BaseParagraph>
    </div>
    <div aria-label="Highlighted Projects">
        <BaseH1>Highlighted Projects</BaseH1>
        <ProjectDisplay class="mb-4" project-title="Project 1" />
        <ProjectDisplay class="mb-4" project-title="Project 2" />
        <ProjectDisplay class="mb-4" project-title="Project 3" />
    </div>
    <div aria-label="Experiences">
        <BaseH1>Experiences</BaseH1>
        <BaseParagraph>
            Socles, Software Engineering Intern. Jul 2023 - Now
            Distributed Systems Lab, Institut Teknologi Bandung, Lab Assistant. Jul 2022 - Now
        </BaseParagraph>
    </div>
</template>