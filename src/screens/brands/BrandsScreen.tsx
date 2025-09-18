import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrendingCarousel from './components/TrendingCarousel';
import ActiveCampaignsRow from './components/ActiveCampaignsRow';
import type { AssignedTask, Campaign, TrendingTask } from './types';

const TABS = ['Explore', 'My tasks', 'Insights'] as const;

const TRENDING_TASKS: TrendingTask[] = [
  { id: 't1', brandLogo: '', hero: 'https://picsum.photos/seed/turf1/800/600', title: 'Spotify Refresher', time: '07:30 PM', dateText: 'Saturday, June 7', relative: '2 days from now', location: 'Independence Brewing Co · Powai', isNew: true },
  { id: 't2', brandLogo: '', hero: 'https://picsum.photos/seed/turf2/800/600', title: 'Campus Creator Meetup', time: '05:00 PM', dateText: 'Sunday, June 15', relative: '10 days from now', location: 'WeWork Nesco · Goregaon' },
  { id: 't3', brandLogo: '', hero: 'https://picsum.photos/seed/turf3/800/600', title: 'Reels Remix Challenge', time: '11:00 AM', dateText: 'Monday, June 23', relative: '18 days from now', location: 'Online · Pan India' },
];

const ACTIVE_CAMPAIGNS: Campaign[] = [
  { id: 'c1', name: 'Blinkit', logo: 'https://cdn.brandfetch.io/idqFC5Rk0D/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1700856649486' },
  { id: 'c2', name: 'Spotify', logo: 'https://cdn.brandfetch.io/id20mQyGeY/w/320/h/320/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1758079362785' },
  { id: 'c3', name: 'Viral Fission', logo: 'https://cdn.brandfetch.io/idGOlOLjHA/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B' },
  { id: 'c4', name: 'Snapchat', logo: 'https://cdn.brandfetch.io/id4VHp4_C_/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1732092205001' },
  { id: 'c5', name: 'Spotify', logo: 'https://cdn.brandfetch.io/id20mQyGeY/w/320/h/320/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1758079362785' },
  { id: 'c6', name: 'Viral Fission', logo: 'https://cdn.brandfetch.io/idGOlOLjHA/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B' },
  { id: 'c7', name: 'Snapchat', logo: 'https://cdn.brandfetch.io/id4VHp4_C_/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1732092205001' },
];

const ASSIGNED_TASKS: AssignedTask[] = [
  { id: 'a1', brand: 'Spotify',      poster: require('../../assets/spotify_card.png'),     title: 'REELS ON INSTAGRAM',  description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
  { id: 'a2', brand: 'Spotify',      poster: require('../../assets/spotify_card.png'),     title: 'REELS ON INSTAGRAM',  description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
  { id: 'a3', brand: 'Muscle Blaze', poster: require('../../assets/muscleblaze_card.png'), title: 'POST ON INSTAGRAM',   description: 'Fuel your grind—post your gains on Instagram.' },
  { id: 'a4', brand: 'Muscle Blaze', poster: require('../../assets/muscleblaze_card.png'), title: 'POST ON INSTAGRAM',   description: 'Fuel your grind—post your gains on Instagram.' },
  { id: 'a5', brand: 'Spotify',      poster: require('../../assets/spotify_card.png'),     title: 'REELS ON INSTAGRAM',  description: 'How Spotify shapes your moments, memories, and every beat of your life.' },
  { id: 'a6', brand: 'Muscle Blaze', poster: require('../../assets/muscleblaze_card.png'), title: 'POST ON INSTAGRAM',   description: 'Fuel your grind—post your gains on Instagram.' },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const GRID_HPAD = 16;
const GRID_GAP = 12;
const ASSIGNED_CARD_W = Math.floor((SCREEN_WIDTH - GRID_HPAD * 2 - GRID_GAP) / 2);

const BrandsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>('Explore');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Brands</Text>
          <View style={styles.headerIcons}>
            <Text style={styles.icon}>🗂️</Text>
            <Text style={[styles.icon, { marginLeft: 12 }]}>⚙️</Text>
          </View>
        </View>

        {/* Segmented Tabs */}
        <View style={styles.tabsContainer}>
          {TABS.map(tab => {
            const selected = activeTab === tab;
            return (
              <Pressable key={tab} style={[styles.tab, selected && styles.tabActive]} onPress={() => setActiveTab(tab)}>
                <Text style={[styles.tabText, selected && styles.tabTextActive]}>{tab}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Trending tasks */}
        <Text style={styles.sectionTitle}>Trending tasks</Text>
        <TrendingCarousel data={TRENDING_TASKS} />

        {/* Active campaigns */}
        <View style={styles.campaignHeaderRow}>
          <Text style={styles.sectionTitle}>Active campaigns</Text>
          <Text style={styles.badge}>7</Text>
        </View>
        <ActiveCampaignsRow data={ACTIVE_CAMPAIGNS} />

                {/* Assigned tasks (2×2 grid) */}
                <Text style={styles.sectionTitle}>Assigned tasks</Text>
        <FlatList
          data={ASSIGNED_TASKS}
          keyExtractor={(it) => it.id}
          renderItem={({ item }) => <AssignedTaskCard item={item} />}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: GRID_HPAD }}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 8 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandsScreen;

const AssignedTaskCard: React.FC<{ item: AssignedTask }> = ({ item }) => {
  return (
    <View style={assignedStyles.card}>
      {/* Poster image (rounded top like your mock) */}
      <Image source={item.poster} style={assignedStyles.poster} />

      {/* Text block */}
      <View style={assignedStyles.textWrap}>
        <Text style={assignedStyles.brand}>{item.brand}</Text>
        <Text style={assignedStyles.desc} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: { paddingBottom: 24 },

  headerRow: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#1C1C1C', fontFamily: 'DM-Sherif'},
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  icon: { fontSize: 18 },

  tabsContainer: {
    marginTop: 8,
    marginHorizontal: 16,
    backgroundColor: '#F1F2F4',
    borderRadius: 14,
    flexDirection: 'row',
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tabText: { color: '#6C6C6C', fontSize: 14, fontWeight: '600' },
  tabTextActive: { color: '#000000' },

  sectionTitle: { marginTop: 18, marginBottom: 10, paddingHorizontal: 16, fontSize: 16, fontWeight: '500', color: '#000000', fontFamily: "DM-Sherif" },

  campaignHeaderRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginTop: 20 },
  badge: {
    marginLeft: 8,
    fontSize: 12,
    color: '#1C79D1',
    backgroundColor: '#E9F4FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    overflow: 'hidden',
  },
});

const assignedStyles = StyleSheet.create({
  card: {
    width: ASSIGNED_CARD_W,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ECECEC',
    marginBottom: 12,
  },
  poster: {
    width: '100%',
    height: 120, // adjust to your asset aspect ratio
  },
  textWrap: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  brand: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1C1C',
    marginBottom: 6,
  },
  desc: {
    fontSize: 12,
    color: '#6A6A6A',
    lineHeight: 16,
  },
});
