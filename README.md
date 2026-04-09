# DriveMaster Pro

Phase 1 scaffold for an Android-focused Google Drive management app built with React Native, Expo, and Expo Router. Features are not implemented yet—this project currently provides the base Expo app plus directory scaffolding for future phases.

## Getting Started
- Install dependencies: `npm install`
- Start the dev server: `npm run start`
- Launch on Android: `npm run android`
- Launch on web: `npm run web`

## Project Structure
- `app/` – Expo Router routes and layouts (tabs template)
- `components/` – shared UI components and hooks from the template
- `constants/` – theme and style constants
- `services/` – placeholder for API/service helpers
- `utils/` – placeholder for shared utilities
- `assets/` – icons, splashes, and other static assets
- `app.json` – Expo configuration (Android package set to `com.drivemaster.app`)

## 50-Feature Roadmap (for future phases)

### Security & Auth
1. Google OAuth2 Login
2. Multi-account fast switching
3. Biometric app lock (Fingerprint)
4. Fallback PIN lock
5. Hidden "Vault" folder with local encryption
6. Auto-lock after configurable inactivity
7. Remote device logout
8. Account storage quota visualizer (Pie chart)

### Core Management
9. Browse directories (List & Grid views)
10. Upload files (Single & Batch)
11. Download files for offline use
12. Create folders
13. Rename files/folders
14. Delete to trash
15. Restore from trash
16. Move/Copy files across directories
17. Global fuzzy search
18. Star/Favorite files

### Unique Power Tools
19. Duplicate file scanner & remover
20. Large file finder (Storage cleaner)
21. Batch renamer (Add prefixes/suffixes)
22. Auto-categorization of files by type
23. Cross-account file transfer tool
24. OCR: Extract text from images stored in Drive
25. Scheduled local-to-cloud backups
26. File version history viewer
27. Empty folder cleaner

### Media & Viewers
28. In-app video player with gesture controls
29. In-app audio player with playlist support
30. Image gallery viewer with swipe gestures
31. EXIF data viewer for images
32. PDF viewer
33. PDF basic annotator (Highlighting)
34. Document scanner (Phone camera to Drive PDF)
35. Markdown (.md) file editor
36. ZIP file extractor directly in Drive
37. ZIP file creator

### UI / UX
38. True Dark Mode / Light Mode toggle
39. Dynamic accent color theming
40. Customizable bottom navigation bar
41. "Recent Files" home screen dashboard
42. Offline mode indicator
43. File transfer progress manager/queue
44. Android Home Screen Widgets (Quick Upload)
45. Multi-language localization support

### Collaboration
46. Generate shareable links
47. Generate expiring share links
48. Modify file access permissions (Viewer/Editor)
49. View comments on Google Docs
50. Share local files directly to specific Drive folders via Android Share Sheet
