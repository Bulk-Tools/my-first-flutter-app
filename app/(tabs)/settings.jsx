import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Profile, preferences, and theme.</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Appearance</Text>
        <Text style={styles.cardValue}>Light mode</Text>
        <Text style={styles.cardHint}>Dark mode toggle will appear here soon.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Notifications</Text>
        <Text style={styles.cardValue}>Drive activity alerts</Text>
        <Text style={styles.cardHint}>We will surface upload and sharing updates.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text.primary.light,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary.light,
  },
  card: {
    backgroundColor: Colors.surface.light,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    gap: 6,
  },
  cardLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: Colors.text.secondary.light,
    fontWeight: '700',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary.light,
  },
  cardHint: {
    fontSize: 13,
    color: Colors.text.secondary.light,
  },
});
