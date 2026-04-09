import { useColorScheme as useNativeColorScheme } from 'react-native';

/**
 * Hook to get the current color scheme
 * Feature 38: True Dark Mode / Light Mode toggle support
 * @returns {'light' | 'dark'} The current color scheme
 */
export default function useColorScheme() {
  const colorScheme = useNativeColorScheme();
  return colorScheme ?? 'light';
}
