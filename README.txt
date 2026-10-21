WEST IS BEST SALES TRACKER - WEB APP

HOSTING (GitHub Pages)
1. Create a repository (private if your plan allows Pages on private repos).
2. Upload EVERYTHING in this folder to the repository root, keeping the icons folder.
3. Settings > Pages > Source: "Deploy from a branch", Branch: main, Folder: / (root). Save.
4. Open the https://<user>.github.io/<repo>/ address it gives you.

INSTALL
- Android (Chrome): open the address > menu > "Install app" / "Add to Home screen".
- iPhone (Safari): open the address > Share > "Add to Home Screen".
- Desktop (Chrome/Edge): install icon in the address bar.

UPDATING
1. Replace index.html with the new build.
2. In sw.js, change VERSION (e.g. r1 -> r2).
3. Upload both. Devices pick up the update on the next online launch.

NOTES
- Data is stored on each device, not on the host. First launch requires onboarding again.
- Offline mode only works over https (not when opened as a local file).
