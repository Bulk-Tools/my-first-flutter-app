# DriveMaster Pro

> The ultimate Google Drive management mobile app for Android, built with React Native and Expo.

---

## 🚀 Project Overview

DriveMaster Pro is a feature-rich Google Drive management application that provides 50 unique features across security, core management, power tools, media viewing, UI/UX, and collaboration.

**Tech Stack:**
- React Native
- Expo (with Expo Router)
- Android Package: `com.drivemaster.app`

---

## 📁 Project Structure

```
drivemaster-pro/
├── app/                    # Expo Router screens & navigation
│   ├── _layout.jsx         # Root layout (Stack navigator)
│   └── (tabs)/             # Tab-based navigation
│       ├── _layout.jsx     # Tab layout
│       ├── index.jsx       # Home / Dashboard
│       ├── files.jsx       # File browser
│       ├── recents.jsx     # Recent files
│       └── settings.jsx    # Settings
├── components/             # Reusable UI components
│   ├── common/             # Generic components (Button, Input, etc.)
│   └── ui/                 # Feature-specific UI components
├── services/               # API & external service integrations
│   ├── auth/               # Google OAuth2 & session management
│   └── drive/              # Google Drive API calls
├── hooks/                  # Custom React hooks
├── store/                  # Global state management
├── utils/                  # Helper/utility functions
├── constants/              # App-wide constants (colors, layout, etc.)
├── types/                  # Type definitions / JSDoc types
└── assets/                 # Images, fonts, icons
```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

---

## 📋 50-Feature Roadmap

Track the progress of all 50 planned features below. Features will be implemented in future phases.

### 🔐 Security & Auth

- [ ] **Feature 1** — Google OAuth2 Login
- [ ] **Feature 2** — Multi-account fast switching
- [ ] **Feature 3** — Biometric app lock (Fingerprint)
- [ ] **Feature 4** — Fallback PIN lock
- [ ] **Feature 5** — Hidden "Vault" folder with local encryption
- [ ] **Feature 6** — Auto-lock after configurable inactivity
- [ ] **Feature 7** — Remote device logout
- [ ] **Feature 8** — Account storage quota visualizer (Pie chart)

### 📂 Core Management

- [ ] **Feature 9** — Browse directories (List & Grid views)
- [ ] **Feature 10** — Upload files (Single & Batch)
- [ ] **Feature 11** — Download files for offline use
- [ ] **Feature 12** — Create folders
- [ ] **Feature 13** — Rename files/folders
- [ ] **Feature 14** — Delete to trash
- [ ] **Feature 15** — Restore from trash
- [ ] **Feature 16** — Move/Copy files across directories
- [ ] **Feature 17** — Global fuzzy search
- [ ] **Feature 18** — Star/Favorite files

### ⚡ Unique Power Tools

- [ ] **Feature 19** — Duplicate file scanner & remover
- [ ] **Feature 20** — Large file finder (Storage cleaner)
- [ ] **Feature 21** — Batch renamer (Add prefixes/suffixes)
- [ ] **Feature 22** — Auto-categorization of files by type
- [ ] **Feature 23** — Cross-account file transfer tool
- [ ] **Feature 24** — OCR: Extract text from images stored in Drive
- [ ] **Feature 25** — Scheduled local-to-cloud backups
- [ ] **Feature 26** — File version history viewer
- [ ] **Feature 27** — Empty folder cleaner

### 🎬 Media & Viewers

- [ ] **Feature 28** — In-app video player with gesture controls
- [ ] **Feature 29** — In-app audio player with playlist support
- [ ] **Feature 30** — Image gallery viewer with swipe gestures
- [ ] **Feature 31** — EXIF data viewer for images
- [ ] **Feature 32** — PDF viewer
- [ ] **Feature 33** — PDF basic annotator (Highlighting)
- [ ] **Feature 34** — Document scanner (Phone camera to Drive PDF)
- [ ] **Feature 35** — Markdown (.md) file editor
- [ ] **Feature 36** — ZIP file extractor directly in Drive
- [ ] **Feature 37** — ZIP file creator

### 🎨 UI / UX

- [ ] **Feature 38** — True Dark Mode / Light Mode toggle
- [ ] **Feature 39** — Dynamic accent color theming
- [ ] **Feature 40** — Customizable bottom navigation bar
- [ ] **Feature 41** — "Recent Files" home screen dashboard
- [ ] **Feature 42** — Offline mode indicator
- [ ] **Feature 43** — File transfer progress manager/queue
- [ ] **Feature 44** — Android Home Screen Widgets (Quick Upload)
- [ ] **Feature 45** — Multi-language localization support

### 🤝 Collaboration

- [ ] **Feature 46** — Generate shareable links
- [ ] **Feature 47** — Generate expiring share links
- [ ] **Feature 48** — Modify file access permissions (Viewer/Editor)
- [ ] **Feature 49** — View comments on Google Docs
- [ ] **Feature 50** — Share local files directly to specific Drive folders via Android Share Sheet

---

## 🏗️ Development Phases

| Phase | Scope | Status |
|-------|-------|--------|
| **Phase 1** | Project initialization, folder structure, app.json setup | ✅ Complete |
| **Phase 2** | Security & Auth (Features 1–8) | 🔲 Pending |
| **Phase 3** | Core Management (Features 9–18) | 🔲 Pending |
| **Phase 4** | Power Tools (Features 19–27) | 🔲 Pending |
| **Phase 5** | Media & Viewers (Features 28–37) | 🔲 Pending |
| **Phase 6** | UI/UX polish (Features 38–45) | 🔲 Pending |
| **Phase 7** | Collaboration (Features 46–50) | 🔲 Pending |

---

## 📱 Build for Android APK

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS build
eas build:configure

# Build APK for Android
eas build --platform android --profile preview
```

The Android package name is configured as `com.drivemaster.app` in `app.json`.

---

## 📄 License

Private — All rights reserved.
