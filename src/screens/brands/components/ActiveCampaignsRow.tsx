import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import type { Campaign } from '../..//brands/types';

const ActiveCampaignsRow: React.FC<{ data: Campaign[] }> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => <CampaignChip item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
    />
  );
};

export default React.memo(ActiveCampaignsRow);

const CampaignChip: React.FC<{ item: Campaign }> = ({ item }) => {
  return (
    <View style={styles.campaign}>
      <View style={styles.campaignImgWrap}>
        <Image source={{ uri: item.logo }} style={styles.campaignImg} />
      </View>
      <Text style={styles.campaignName} numberOfLines={1}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  campaign: { width: 96, alignItems: 'center' },
  campaignImgWrap: {
    width: 92,
    height: 92,
    borderRadius: 18,
    backgroundColor: '#FFF6CF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  campaignImg: { width: '100%', height: '100%' },
  campaignName: { marginTop: 6, fontSize: 14, color: '#000000' , fontFamily: 'Nunito', fontWeight:'400'},
});
