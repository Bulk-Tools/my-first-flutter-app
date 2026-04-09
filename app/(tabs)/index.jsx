import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drive dashboard</Text>
      <Text style={styles.subtitle}>Stay on top of storage, uploads, and quick actions.</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Storage</Text>
          <Text style={styles.cardValue}>128 GB</Text>
          <Text style={styles.cardHint}>75% used • Clear space</Text>
        </View>

        <View style={[styles.card, styles.cardAccent]}>
          <Text style={styles.cardLabel}>Uploads</Text>
          <Text style={styles.cardValue}>6 pending</Text>
          <Text style={styles.cardHint}>Sync runs in the background</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Quick access</Text>
        <Text style={styles.bannerText}>Connect Google Drive to unlock analytics and shortcuts.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.text.primary.light,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary.light,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.surface.light,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
    gap: 6,
  },
  cardAccent: {
    backgroundColor: '#eef4ff',
    borderColor: '#d5e2ff',
  },
  cardLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: Colors.text.secondary.light,
    fontWeight: '700',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text.primary.light,
  },
  cardHint: {
    fontSize: 13,
    color: Colors.text.secondary.light,
  },
  banner: {
    marginTop: 8,
    backgroundColor: Colors.surface.light,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border.light,
    shadowColor: Colors.shadow.light,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 3,
    gap: 6,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text.primary.light,
  },
  bannerText: {
    fontSize: 14,
    color: Colors.text.secondary.light,
  },
});
