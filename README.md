# TAWPWAT — Official Landing & Legal Portal

Landing page, interactive Warp Portal simulator, and Google Play legal documentation for **TAWPWAT: The Amazing Warp Post Way at Tawpwat** (`com.mwveliz.tawpwat`).

## Features
- **36 Languages** (`EN`, `ES`, `JA`, and 33 more, including RTL support for Arabic, Hebrew, and Persian)
- **Interactive Warp Portal Oscilloscope Simulator** demonstrating the in-game frequency calibration mechanic
- **Dedicated Legal Pages** for Google Play Console:
  - `privacy.html` — Privacy Policy (100% offline, zero data collection)
  - `terms.html` — Terms & Conditions
  - `license.html` — License & Attribution
- **Google Play Store Link**: `https://play.google.com/store/apps/details?id=com.mwveliz.tawpwat`
- **Automated GitHub Pages Deployment** via `.github/workflows/deploy.yml`

## Deploy to GitHub Pages
1. Push this repository to GitHub (`main` or `master` branch).
2. In your GitHub repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` will publish the site automatically.
4. Use the published Privacy Policy URL in **Google Play Console → App content → Privacy policy**:
   `https://<your-github-username>.github.io/<repo-name>/privacy.html`
