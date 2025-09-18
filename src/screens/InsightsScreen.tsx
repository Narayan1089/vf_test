import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InsightsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Insights</Text>
        <Text style={styles.sub}>(Dummy) Your engagement looks great this week.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  wrap: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#1C1C1C' },
  sub: { marginTop: 8, color: '#666' },
});

export default InsightsScreen;
