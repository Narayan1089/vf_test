import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { HomeTabParamList, RootStackParamList } from './types';

// Use require to avoid import errors if modules are missing
const BrandsScreen = require('../screens/brands/BrandsScreen').default;
const MyTasksScreen = require('../screens/MyTasksScreen').default;
const InsightsScreen = require('../screens/InsightsScreen').default;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<HomeTabParamList>();

function HomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#111',
        tabBarInactiveTintColor: '#8A8A8A',
        tabBarStyle: { height: 56 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="Explore" component={BrandsScreen} />
      <Tabs.Screen name="MyTasks" component={MyTasksScreen} options={{ title: 'My tasks' }} />
      <Tabs.Screen name="Insights" component={InsightsScreen} />
    </Tabs.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      {/*
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          options={{ headerShown: true, title: 'Task details' }}
        />
      */}
    </Stack.Navigator>
  );
}
