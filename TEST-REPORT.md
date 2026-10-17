# Verification — October 17, 2026

- Rechecked all four main pages at 320, 375, 650, 768, 900, 1100, 1120 and 1440 pixels: **32 combinations passed** with no horizontal overflow, brand/navigation overlap, or homepage heading/body overlap. Each page has exactly one language link.
- Visually inspected the homepage introduction at desktop size and the mobile navigation/language control. The heading has its own area above both text columns.
- The mobile menu opens correctly and Escape closes it. The Amharic control is available in the menu on phones and the header on desktop.
- Clicked the Contact page Amharic control: it opened Google Translate in a separate tab and displayed the currently published Contact page in Amharic. This confirms the external translation flow; unpublished local changes will appear there only after deployment.
- Verified the exact requested AASTU and President’s Message hrefs in the generated HTML.
- All 96 local href/src references resolve to files or existing fragment IDs. HTML tags balance, sitemap XML parses and structured-data JSON parses.
- Original portrait, appointment images, favicon and CNAME remain unchanged.
- ZIP archive integrity and required files checked. No original source folder or Git repository was edited.

## Existing checks retained from October 16

The custom 404 was tested using a local emulation of GitHub’s nested-URL fallback, including Return home. The résumé redirect and Back to Top were tested. Complete desktop screenshots of all four pages were inspected. These features are retained in this refinement.

## External limitations

- The user-supplied university URLs have been restored as requested. The President’s Message URL returned unrelated content in web checks. Including its exact URL does not certify the external page's current content or availability.
- No official personal or office email was verified or invented. Contact says a direct office email is not published here.
- Google Translate operates on public deployed pages and supplies machine translation, not a reviewed Amharic edition. English remains the official/default version.
- Research citations and social profile destinations are retained; login-only content and social-account ownership were not certified. Prior direct DOI checks returned 200 for DMSO.S280152 and 403 for the other three destinations.
- No GitHub deployment, DNS changes or physical-device testing was performed.
