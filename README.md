CETAA Website 
Project Structure
├── cetaa.html          # Page 1 — Main CETAA website
├── djhall.html         # Page 2 — Diamond Jubilee Hall Renovation
├── collegetrivandrum.jpg     # Hero image for Page 1
├── diamondjubilee_hall.avif  # Hero & gallery image for Page 2
├── diamondjubilee_hallcet.avif  # Overview & gallery image for Page 2

Note: The two .avif images and the .jpg are currently embedded as base64 directly inside the HTML files. You do not need the image files in the same folder for the pages to work — they are self-contained.


Pages Overview
Page 1 — cetaa.html

The main CETAA landing page introducing the College of Engineering Trivandrum and its alumni association.
Sections included:

Hero with college photo background
Legacy timeline (1939 to present)
Global alumni statistics
Distinguished alumni cards (placeholder — add real names and photos)
Upcoming events list
Join / CTA section

Page 2 — djhall.html

A dedicated fundraising page for the proposed Diamond Jubilee Hall renovation.
Sections included:

Hero with hall image background
Project overview with hall photo
6 renovation objectives (AC, acoustics, lighting, ancillary, accessibility, structural)
Photo gallery of the hall
Budget breakdown (₹1 Crore target)
Donation tiers (Friend / Silver Patron / Gold Benefactor)
80G tax exemption note


Design System
Both pages share the same design language:
TokenValueBackground#071529 (Deep Navy)Accent#C9A74D (Gold)Text#F7F5F2 (Ivory)Muted textrgba(247,245,242,0.5)Display fontPlayfair Display (Google Fonts)Body fontInter (Google Fonts)

How to Use

Open either .html file directly in a browser — no server needed.
Both pages require an internet connection to load Google Fonts. Without it, the browser will fall back to serif and sans-serif system fonts.
Pages are linked to each other via the nav — djhall.html links back to cetaa.html as home.


Placeholder Content to Replace
In cetaa.html:

Distinguished Alumni — replace 👤, Alumni Name, batch year, and role with real data
Events — update dates, titles, and locations as needed
Stats — verify the 10,000+ / 50+ / 100+ / 500+ figures with CETAA records

In djhall.html:

Budget figures — confirm the ₹1 Crore breakdown and ₹28 Lakhs raised figure with the committee
Donate Now button — link href="#" to the actual payment gateway or Google Form
Pledge / Contact buttons — link to the appropriate CETAA contact page or email (mailto:)
80G note — confirm tax exemption eligibility with CETAA before publishing


If Separating CSS and JS
If you move styles and scripts into separate files (style.css, script.js), replace the <style> block in <head> with:
html<link rel="stylesheet" href="style.css" />
And replace the <script> block before </body> with:
html<script src="script.js"></script>
Both files must be in the same folder as the HTML files, or adjust the path accordingly.