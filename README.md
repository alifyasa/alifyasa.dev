# Personal Website

This website is designed to showcase my work and skills.

## Technologies Used

Built using Astro and Solid.js, deployed using Cloudflare Pages.

## Project Structure

```
src
├── components
├── layouts
└── pages
```

This represents the structure of the project's source code:

1.  `components`: Holds various reusable components used across the site.
2.  `layouts`: Contains the layout files, defining the overall structure of the pages.
3.  `pages`: Includes the different pages of the website.

## Commands

| Command   | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `dev`     | Starts the development server using `astro dev`                                      |
| `start`   | Alias for `astro dev`                                                                |
| `build`   | Checks code with `astro check` and builds with `astro build`                         |
| `preview` | Creates a preview using Cloudflare Pages dev server with `wrangler pages dev ./dist` |
| `astro`   | Runs Astro CLI commands                                                              |
| `lint`    | Runs ESLint with auto-fixing                                                         |
| `format`  | Runs Prettier to format code                                                         |
