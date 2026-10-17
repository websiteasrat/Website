DR. ASRAT ATSEDEWEYN — UPDATED FOUR-PAGE WEBSITE
Updated October 17, 2026

START HERE
This folder is the complete static website. No installation or build is required.
Open index.html to review it, or serve the folder with a local web server.
The editable HTML, CSS, JavaScript and original assets are included.

PUBLISH WITH THE EXISTING GITHUB PAGES SETUP
1. Back up the existing Website repository.
2. Copy the CONTENTS of this folder into the repository root, replacing matching
   files. Do not place the asrat-website folder inside the repository.
3. Include .nojekyll (a hidden file), CNAME, all HTML files and assets/.
4. Commit and push your changes using GitHub Desktop.
5. In repository Settings > Pages, retain the existing publishing source.
   For branch publishing, select your published branch and / (root).
6. Keep the custom domain www.asratatsedeweyn.com and the CNAME file.
   This package does not change DNS or publish anything automatically.
7. After GitHub finishes deployment, check all four pages, the mobile menu,
   resume.html, and an invalid URL such as /missing/test to confirm the 404.

FILES
index.html        Home and biography
leadership.html   Leadership & Experience
scholarship.html  Research & Recognition
contact.html      Profiles and contact availability
404.html          Branded GitHub Pages error page
resume.html       Existing redirect to leadership.html#experience
styles.css        Shared design and responsive styles
script.js         Navigation, reading progress and reveal behavior
assets/           Original portrait, favicon and two appointment documents
CNAME             Existing custom domain (preserved exactly)
.nojekyll         Serve static files directly on GitHub Pages
robots.txt        Existing crawl configuration
sitemap.xml       Four main pages with update dates
CHANGELOG.md      Changes and review-comment disposition
TEST-REPORT.md    Tests performed and limitations

UNIVERSITY LINKS AND CONTACT INFORMATION
The Contact page now links to https://aastu.edu.et/ under University and
professional enquiries. Home and Leadership link directly to the President's
Message at https://www.aastu.edu.et/presidents-message/, as requested.
These destinations were explicitly supplied by the owner. Web checks returned
unrelated content for the President's Message URL; the external destination
should be reviewed by the owner. Its availability is outside this package.
No direct personal or office email was invented. The public Contact page simply
states that a direct office email is not published here.

OPTIONAL AMHARIC TRANSLATION
English is the original and official site language (lang="en"). The header
navigation includes an Amharic link labeled Auto-translate. On smaller screens,
it appears in the navigation menu. It opens the current public page through
Google Translate with English as source and Amharic as target, in a new tab.
The original English page stays open. No translator script runs on page load.
The link uses the published custom-domain page, so new changes must be deployed
before Google can translate them. It cannot translate an unpublished localhost
preview. Google's service and machine-translation quality are external; this
is not a separately reviewed or official Amharic edition.
The translation link was clicked and successfully opened the currently published
Contact page in Amharic during testing.

CONTENT AND ASSETS
Latest supplied HTML is the baseline. Career dates, degree details, research
citations, social destinations, appointment wording and original image files
have been retained except for the explicit changes in CHANGELOG.md.
The BRICS certificate remains redacted and described as an issuer-specific
appointment. The certificate's end date is retained without repeating its
inconsistent claim of a four-year term.

The source folder and its Git repository were not modified.
