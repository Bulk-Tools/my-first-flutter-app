// Type definitions for DriveMaster Pro
// These serve as documentation and can be migrated to TypeScript in the future

/**
 * @typedef {Object} DriveFile
 * @property {string} id - Google Drive file ID
 * @property {string} name - File name
 * @property {string} mimeType - MIME type
 * @property {number} size - File size in bytes
 * @property {string} createdTime - ISO date string
 * @property {string} modifiedTime - ISO date string
 * @property {string} [thumbnailLink] - Thumbnail URL
 * @property {boolean} starred - Whether file is starred
 * @property {boolean} trashed - Whether file is in trash
 */

/**
 * @typedef {Object} DriveAccount
 * @property {string} id - Account ID
 * @property {string} email - Account email
 * @property {string} displayName - Display name
 * @property {string} [photoURL] - Profile photo URL
 * @property {Object} storageQuota - Storage quota info
 * @property {number} storageQuota.used - Used storage in bytes
 * @property {number} storageQuota.limit - Total storage limit in bytes
 */

/**
 * @typedef {Object} AppSettings
 * @property {string} theme - 'light' | 'dark' | 'system'
 * @property {string} accentColor - Hex color string
 * @property {boolean} biometricLock - Whether biometric lock is enabled
 * @property {number} autoLockTimeout - Auto-lock timeout in minutes
 * @property {string} viewMode - 'list' | 'grid'
 * @property {string} language - Language code (e.g., 'en', 'es')
 */

export {};
