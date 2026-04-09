// Global application state store
// Will be implemented with a state management solution (e.g., Zustand, Redux) in future phases

export const initialState = {
  // Auth state
  accounts: [],
  activeAccount: null,
  isAuthenticated: false,

  // File state
  currentFolder: null,
  files: [],
  recentFiles: [],
  starredFiles: [],
  trashedFiles: [],

  // UI state
  theme: 'system',
  viewMode: 'list',
  isLoading: false,
  error: null,

  // Transfer state
  uploadQueue: [],
  downloadQueue: [],
};
