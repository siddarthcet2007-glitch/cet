CETAA Website — README

Table of Contents

1.Project Overview
2.Project Structure
3.Pages
4.Design System
5.Setup & Usage
6.Placeholder Content
7.Separating CSS & JS
8.Git & Version Control


1. Project Overview
This is a two-page static website built for CETAA (College of Engineering Trivandrum Alumni Association). It is built with plain HTML and CSS — no frameworks, no build tools — and can be opened directly in any browser.
Page 1 introduces CETAA and the legacy of CET to a global alumni audience.

Page 2 is a dedicated fundraising page for the Diamond Jubilee Hall renovation project.

2. Project Structure
cetaa-website/
│
├── cetaa.html                      # Page 1 — Main CETAA website
├── djhall.html                     # Page 2 — Diamond Jubilee Hall Renovation
│
├── collegetrivandrum.jpg           # Hero image (Page 1)
├── diamondjubilee_hall.avif        # Hero & gallery image (Page 2)
├── diamondjubilee_hallcet.avif     # Overview & gallery image (Page 2)
│
├── style.css                       # Shared stylesheet (if separated)
├── script.js                       # Shared scripts (if separated)
│
└── README.md                       # This file

Note: All images are currently embedded as base64 directly inside the HTML files. The standalone image files are only needed if you choose to reference them externally.


3. Pages
Page 1 — cetaa.html
The main CETAA landing page.
SectionDescriptionHeroFull-screen college photo with animated zoomLegacyTimeline from 1939 to presentStatsGlobal alumni numbersDistinguished AlumniCards — add real names and photosEventsUpcoming events listJoinCall-to-action section

Page 2 — djhall.html
Fundraising page for the Diamond Jubilee Hall renovation.
SectionDescriptionHeroFull-screen hall photo with animated zoomProject OverviewTwo-column layout with hall image and descriptionObjectives6-card grid — AC, acoustics, lighting, ancillary, accessibility, structuralGalleryBoth hall images side by sideBudget BreakdownGold progress bars — ₹1 Crore targetDonation TiersFriend / Silver Patron / Gold BenefactorCTADonate, Pledge, and Contact buttons

4. Design System
Both pages share the same visual language.
Colours
NameHexUsageDeep Navy#071529Page backgroundGold#C9A74DAccents, headings, bordersIvory#F7F5F2Primary textMutedrgba(247,245,242,0.5)Secondary textDark Navy#040f1eAlternate section background
Typography
RoleFontSourceDisplay / HeadingsPlayfair DisplayGoogle FontsBody / UIInterGoogle Fonts
Key Patterns

Fixed glass navbar that activates on scroll
Gold horizontal dividers between sections
Cards with gold border glow on hover
Scroll-triggered fade-up reveal animations
Full-screen hero with slow zoom animation


5. Setup & Usage
Requirements

Any modern browser (Chrome, Firefox, Safari, Edge)
Internet connection to load Google Fonts

Running Locally
No server or install required. Simply open either file in your browser:
cetaa.html     →  double-click or drag into browser
djhall.html    →  double-click or drag into browser
Navigation Between Pages
The two pages are linked via the navbar:

djhall.html → navbar links back to cetaa.html as Home
Both files must be in the same folder for links to work


6. Placeholder Content
cetaa.html
LocationWhat to ReplaceDistinguished Alumni cards👤, Alumni Name, batch year, and roleEvents sectionDates, titles, and locationsStats sectionVerify 10,000+ / 50+ / 100+ / 500+ with CETAA records
djhall.html
LocationWhat to ReplaceBudget figuresConfirm ₹1 Crore breakdown and ₹28 Lakhs raised with committeeDonate Now buttonLink href="#" to payment gateway or Google FormPledge / Contact buttonsLink to CETAA contact page or mailto:email@cetaa.org80G noteConfirm tax exemption eligibility before publishing

7. Separating CSS & JS
The styles and scripts are currently written inline inside each HTML file. If you want to move them into separate files:
In <head> — replace the <style> block with:
html<link rel="stylesheet" href="style.css" />
Before </body> — replace the <script> block with:
html<script src="script.js"></script>
Keep style.css and script.js in the same folder as the HTML files, or adjust the file path if using subfolders.

8. Git & Version Control
First-Time Setup
Step 1 — Initialise the repository
bashgit init
Step 2 — Link to your GitHub repository
bashgit remote add origin https://github.com/your-username/your-repo-name.git
Step 3 — Stage all files
bashgit add .
Step 4 — Make your first commit
bashgit commit -m "Initial commit — CETAA website"
Step 5 — Push to GitHub
bashgit push -u origin main

Pushing Updates
After making changes to any file:
bashgit add .
git commit -m "Describe what you changed"
git push origin main

Common Errors
ErrorCauseFixgit: command not foundGit not installedInstall from git-scm.comremote: Permission deniedAuthentication issueCheck GitHub credentials or SSH keyrejected — non-fast-forwardRemote has changes you don't have locallyRun git pull origin main first, then pushbranch main does not existBranch named differentlyUse git push origin master insteadnothing to commitNo changes detectedMake sure you saved your files first

Built for CETAA — College of Engineering Trivandrum Alumni Association · 2025You said: no images add for now remove that partno images add for now remove that part10:19Claude responded: CETAA Website — READMECETAA Website — README

Table of Contents

Project Overview
Project Structure
Pages
Design System
Setup & Usage
Placeholder Content
Separating CSS & JS
Git & Version Control


1. Project Overview
This is a two-page static website built for CETAA (College of Engineering Trivandrum Alumni Association). It is built with plain HTML and CSS — no frameworks, no build tools — and can be opened directly in any browser.
Page 1 introduces CETAA and the legacy of CET to a global alumni audience.

Page 2 is a dedicated fundraising page for the Diamond Jubilee Hall renovation project.

2. Project Structure
cetaa-website/
│
├── cetaa.html        # Page 1 — Main CETAA website
├── djhall.html       # Page 2 — Diamond Jubilee Hall Renovation
│
├── style.css         # Shared stylesheet (if separated)
├── script.js         # Shared scripts (if separated)
│
└── README.md         # This file

3. Pages
Page 1 — cetaa.html
The main CETAA landing page.
SectionDescriptionHeroFull-screen background with animated zoomLegacyTimeline from 1939 to presentStatsGlobal alumni numbersDistinguished AlumniCards — add real names and photosEventsUpcoming events listJoinCall-to-action section

Page 2 — djhall.html
Fundraising page for the Diamond Jubilee Hall renovation.
SectionDescriptionHeroFull-screen background with animated zoomProject OverviewTwo-column layout with descriptionObjectives6-card grid — AC, acoustics, lighting, ancillary, accessibility, structuralGalleryImage slots for hall photosBudget BreakdownGold progress bars — ₹1 Crore targetDonation TiersFriend / Silver Patron / Gold BenefactorCTADonate, Pledge, and Contact buttons

4. Design System
Both pages share the same visual language.
Colours
NameHexUsageDeep Navy#071529Page backgroundGold#C9A74DAccents, headings, bordersIvory#F7F5F2Primary textMutedrgba(247,245,242,0.5)Secondary textDark Navy#040f1eAlternate section background
Typography
RoleFontSourceDisplay / HeadingsPlayfair DisplayGoogle FontsBody / UIInterGoogle Fonts
Key Patterns

Fixed glass navbar that activates on scroll
Gold horizontal dividers between sections
Cards with gold border glow on hover
Scroll-triggered fade-up reveal animations
Full-screen hero with slow zoom animation


5. Setup & Usage
Requirements

Any modern browser (Chrome, Firefox, Safari, Edge)
Internet connection to load Google Fonts

Running Locally
No server or install required. Simply open either file in your browser:
cetaa.html     →  double-click or drag into browser
djhall.html    →  double-click or drag into browser
Navigation Between Pages
The two pages are linked via the navbar:

djhall.html links back to cetaa.html as Home
Both files must be in the same folder for links to work


6. Placeholder Content
cetaa.html
LocationWhat to ReplaceHero backgroundAdd college image to hero-img background-image in CSSDistinguished Alumni cards👤, Alumni Name, batch year, and roleEvents sectionDates, titles, and locationsStats sectionVerify 10,000+ / 50+ / 100+ / 500+ with CETAA records
djhall.html
LocationWhat to ReplaceHero backgroundAdd hall image to hero-img background-image in CSSOverview & gallery image slotsAdd hall photos where marked in HTML commentsBudget figuresConfirm ₹1 Crore breakdown and ₹28 Lakhs raised with committeeDonate Now buttonLink href="#" to payment gateway or Google FormPledge / Contact buttonsLink to CETAA contact page or mailto:email@cetaa.org80G noteConfirm tax exemption eligibility before publishing

7. Separating CSS & JS
The styles and scripts are currently written inline inside each HTML file. If you want to move them into separate files:
In <head> — replace the <style> block with:
html<link rel="stylesheet" href="style.css" />
Before </body> — replace the <script> block with:
html<script src="script.js"></script>
Keep style.css and script.js in the same folder as the HTML files, or adjust the path if using subfolders.

8. Git & Version Control
First-Time Setup
Step 1 — Initialise the repository
bashgit init
Step 2 — Link to your GitHub repository
bashgit remote add origin https://github.com/your-username/your-repo-name.git
Step 3 — Stage all files
bashgit add .
Step 4 — Make your first commit
bashgit commit -m "Initial commit — CETAA website"
Step 5 — Push to GitHub
bashgit push -u origin main

Pushing Updates
After making changes to any file:
bashgit add .
git commit -m "Describe what you changed"
git push origin main

Common Errors
ErrorCauseFixgit: command not foundGit not installedInstall from git-scm.comremote: Permission deniedAuthentication issueCheck GitHub credentials or SSH keyrejected — non-fast-forwardRemote has changes locallyRun git pull origin main first, then pushbranch main does not existBranch named differentlyUse git push origin master insteadnothing to commitNo changes detectedMake sure you saved your files first

Built for CETAA — College of Engineering Trivandrum Alumni Association · 2025