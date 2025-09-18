import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTasksScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.wrap}>
        <Text style={styles.title}>My tasks</Text>
        <Text style={styles.sub}>(Dummy) You have 0 tasks pending.</Text>
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

export default MyTasksScreen;
