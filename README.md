
  # Create Presentation Slides

  This is a code bundle for Create Presentation Slides. The original project is available at https://www.figma.com/design/mio3xlzZC9TAlhfAuIbafV/Create-Presentation-Slides.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to GitHub Pages

  This repo is configured to deploy automatically via GitHub Actions (see `.github/workflows/deploy-pages.yml`).

  1. Push this project to a GitHub repository.
  2. In GitHub, go to **Settings → Pages**.
  3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
  4. Push to `main` (or `master`) and the workflow will publish the site.

  Notes:
  - For project pages (`https://<owner>.github.io/<repo>/`), the workflow sets the correct Vite base path automatically.
  - For user/org pages (`https://<owner>.github.io/`), use a repo named `<owner>.github.io`.
  