import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../constants/colors';

export default function LoginScreen() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroAccent} />
      <View style={styles.topContent}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>DriveMaster Pro</Text>
        </View>
        <Text style={styles.title}>Organize your Drive faster</Text>
        <Text style={styles.subtitle}>
          Smart insights, quick access, and secure sync tailored for your workflow.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome back</Text>
        <Text style={styles.cardSubtitle}>Sign in to continue to your dashboard.</Text>

        <Pressable style={({ pressed }) => [styles.googleButton, pressed && styles.googleButtonPressed]} onPress={handleGoogleSignIn}>
          <View style={styles.googleMarkOuter}>
            <View style={styles.googleMarkInner} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </Pressable>

        <View style={styles.helperRow}>
          <View style={styles.helperDot} />
          <Text style={styles.helperText}>We only request the permissions needed to manage your files.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  heroAccent: {
    position: 'absolute',
    top: -140,
    right: -90,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: Colors.primary,
    opacity: 0.14,
  },
  topContent: {
    gap: 12,
    marginBottom: 36,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.surface.light,
    borderColor: Colors.border.light,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text.primary.light,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.text.secondary.light,
  },
  card: {
    backgroundColor: Colors.surface.light,
    borderRadius: 18,
    padding: 20,
    gap: 14,
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary.light,
  },
  cardSubtitle: {
    fontSize: 14,
    color: Colors.text.secondary.light,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Colors.surface.light,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
  },
  googleButtonPressed: {
    transform: [{ translateY: 1 }],
    opacity: 0.92,
  },
  googleMarkOuter: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
  googleMarkInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.google,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text.primary.light,
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  helperDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
  },
  helperText: {
    flex: 1,
    fontSize: 13,
    color: Colors.text.secondary.light,
  },
});
