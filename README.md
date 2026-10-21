# PileAxis Website

Public source for the product website of **PileAxis**, a Windows desktop program by RamisoftSolutions for the
analysis of a single deep foundation element under combined axial and lateral loads in layered soil: drilled shafts
and caissons, driven precast pretensioned concrete piles and driven steel H-piles. It solves the p-y response coupled
with the axial response, checks the section to ACI 318-25 or AISC 360-22, and audits the soil's mobilization and the
global equilibrium independently.

This repository's **Issues** are also the public place to report a bug in the program or ask for a feature: see
[Reporting bugs and requesting features](#reporting-bugs-and-requesting-features).

## Scope of this repository

This repository contains **only the static website** (`src/`): HTML, CSS, a small script and SVG artwork, plus the
GitHub configuration that makes its Issues usable as a public support channel.

**It does not contain, and will never contain, any PileAxis application source code.** The desktop program, its
engine and its cloud service are developed in a separate, private repository. Nothing here requires or exposes that
source: no engine code, no project files, no cloud configuration, no build output of the program.

## Reporting bugs and requesting features

- **Bug reports and feature requests (public):** open an [issue](../../issues/new/choose) and pick the template that
  fits.
- **Private matters** (confidential project data, licensing, security): email `admin@ramisoftsolutions.com`. Please do
  not attach a client's project to a public issue.
- **Version details:** in the program, **Help > About > Copy details** copies the version, the build and how the
  program was installed. Paste them into the issue.

## Site map

| Path | File | What it is |
|---|---|---|
| `/` | `src/index.html` | Home: what the program does, the three pile systems, the free checks, Pro, the AI Assistant, plans, download, support |
| `/features/` | `src/features/index.html` | The engineering in detail: methods, soil models, axial capacity, section checks, driven piles, audits, limits, validation, references |
| `/pricing/` | `src/pricing/index.html` | Free, signed in, and Pro, with a comparison table and questions |
| `/support/` | `src/support/index.html` | Where to report a bug, ask for a feature or write privately |
| `/privacy/` | `src/privacy/index.html` | Privacy policy |
| `/terms/` | `src/terms/index.html` | Terms of use, including the engineering disclaimer |
| (any 404) | `src/404.html` | Not-found page |

`styles.css` and `site.js` are FoundaTrix Studio's site's own files (www.foundatrix.com, the sibling product), so the
two product sites read as one family; PileAxis's few additions sit at the end of `styles.css` under their own heading.
A change to a shared rule belongs in both sites. The pages are hand-written HTML with no build step and no framework.
The site uses no cookies, analytics, trackers or third-party scripts, fonts or images: everything it loads comes from
its own folder.

**Every `href` and `src` is root-absolute** (`/styles.css`, `/images/...`, `/pricing/`). The pages live in folders, so
a relative path that works from `/` breaks from `/pricing/`, and for a stylesheet it fails silently: the page still
renders, unstyled.

**No inline styles or scripts.** `staticwebapp.config.json` sends a content security policy with `style-src 'self'`
and `script-src 'self'`, so a `style=` attribute or a script body is ignored by the browser. The one `<script>` with a
body is the home page's JSON-LD block (`application/ld+json`), which is data and is not executed. The SVG artwork uses
presentation attributes only.

## Copy rules

- The company is **RamisoftSolutions**, one word.
- No competitor or competing program is named; where a comparison is needed, the word is "reference".
- Features that are available to administrators only in the program are not advertised; the Store listing draft
  (`PileAxis.Store/StoreListing.md`, in the program's repository) names them. Add them the day they open to customers.
- Pricing follows the manual's words (§1.5): free, signed in, Pro, free trial; Pro pricing "to be announced"; no
  promise of anything free for ever. The trial's length is not stated, because the program counts it from the first sign-in to PileAxis
  and its length is a server setting.
- The emphasis is on what the program computes, end to end, and on its engineering accuracy.
- No connection details of the AI-assistant connector (no address, no client id) anywhere.
- Fictional project, client and site names only in any picture or example.

## Pictures still to replace

There are **no real screenshots of PileAxis yet**. Every product picture is a clean SVG placeholder drawn to look like
the program's dark theme, inside a `.shot` frame whose bar stands in for the window's caption. Replace each with a real
capture when one exists:

| Placeholder | Used on | The real screenshot it stands for |
|---|---|---|
| `src/images/screens/profiles.svg` | Home (below the hero) | Results tab, LRFD Profiles: deflection, moment, shear and soil reaction for several cases, the governing case highlighted |
| `src/images/screens/soil-profile.svg` | Home, Features `#soil` | Soil tab: the layer grid beside the Soil Profile graphic, a water table set |
| `src/images/screens/interaction.svg` | Home, Features `#section` | Results tab, Interaction sub-tab: the P-M diagram with every node's demand |
| `src/images/screens/summary.svg` | Home | Results tab, Summary: the governing tables for section, soil and service, the status lights lit |
| `src/images/screens/driven-piles.svg` | Home `#driven`, Features `#driven` | Pile and Section tabs on an HP pile or a voided octagonal precast pile, the section sketch shown |
| `src/images/screens/pushover.svg` | Home, Features `#pushover` | Pushover screen: two or three capacity curves with yield and hinge events marked |
| `src/images/screens/pdf-report.svg` | Home, Features `#report` | Two or three pages of the PDF report on the app's background (never a PDF reader's window) |
| `src/images/screens/py-curve.svg` | Home | The tabular p-y curve editor with its points and curve |
| `src/images/screens/project-map.svg` | Home | A cloud project's map with its piles and a site-boundary attachment (fictional coordinates) |
| `src/images/screens/ai-assistant.svg` | Home `#assistant`, Features `#assistant` | The AI Assistant window answering why a case governs, with a citation |
| `src/images/screens/assistant-whatif.svg` | Home `#connect`, Features `#connect` | Not a screenshot to replace: a generic assistant's conversation running two what-if versions of a pile on the engineer's computer, and the proposal in PileAxis's Assistant Requests pane with Apply and Decline (2026-10-20, PileAxis 12.022; FoundaTrix Studio's site has its footing twin) |

The same shot list, with captions, is in the program's Store listing draft (`PileAxis.Store/StoreListing.md`). When
replacing one: a fictional project and client only (never a real one), fictional coordinates on any map, a dark-theme
window cropped below the caption row, saved as WebP at quality 84 to 86 in `src/images/screens/`; then update the
`<img>` `src`, `width`, `height` and `alt`.

Artwork that is not a placeholder: `src/images/pileaxis-mark.svg` (the nav and footer mark) and `src/favicon.svg` are
the program's own mark, converted by hand from `PileAxis.Store/Logo.xaml` and `Logo.Small.xaml` (the same paths, the
gradients in user space, the XAML opacity masks as SVG masks, the ground grid clipped to the plate);
`src/images/hero-pile.svg` (the hero's illustration) and `src/images/types/*.svg` (the three pile systems) are
illustrations.

## Settled values

| What | Where | Now |
|---|---|---|
| Microsoft Store link | `src/index.html`, `#download`; every "Download" button goes to `/#download` | Settled 2026-10-16, the day the listing went live: the `.store-btn` links `https://apps.microsoft.com/detail/9N0QPQL17F66` (Store ID 9N0QPQL17F66), as FoundaTrix Studio's site does. The requirements are the Store package's: Windows 10 version 2004 or later, x64 (Windows 11 on ARM by emulation), the runtime included |
| Current installer | (retired) | The "Install the current release" button to the ClickOnce publish page was retired with the Store link; existing ClickOnce installs keep updating themselves |
| GitHub repository | Every GitHub icon and the issue links | `https://github.com/CoolRamin/PileAxis-site` |

The privacy policy and terms of use are the text of `PileAxis.Store/PrivacyPolicy.md` and `TermsOfUse.md` in the
program's repository (effective October 15, 2026). Change both together.

## Local preview

There is no build step. Because the links are root-absolute, serve `src/` with any static file server rather than
opening the files directly, for example:

```bash
python -m http.server 8080 --directory src
```

then open `http://localhost:8080/`.

## Deployment

The site is meant for **Azure Static Web Apps** (Free plan): the app `swa-pileaxis-site` in the resource group
`rg-lateralpile`. Every push to `main` publishes `src/` through `.github/workflows/deploy.yml`, which authenticates
with the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN` (the app's deployment token). Pull requests are not
deployed. `src/staticwebapp.config.json` sets trailing slashes, the 404 page and the security headers, including a
content security policy.

The canonical address is `https://www.pileaxis.com`: the canonical links, `og:url`, `robots.txt` and `sitemap.xml`
all name it.

## Contributing

Typo fixes and copy improvements are welcome by pull request; see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT for the website's source and content (see [LICENSE](LICENSE)). The PileAxis program itself is separate,
closed-source software under its own terms. "PileAxis" and its mark are not licensed for reuse by the MIT license.
