import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { TrendingTask } from '../..//brands/types';

type Props = { item: TrendingTask; cardWidth: number };

const TaskCard: React.FC<Props> = ({ item, cardWidth }) => {
    const heroHeight = Math.round(cardWidth * 0.82);
    return (
        <View style={[styles.card, { width: cardWidth }]}>
            <View style={[styles.heroBox, { height: heroHeight }]}>
                <Image source={{ uri: item.hero }} style={styles.heroImg} />
                <View style={styles.heroOverlay} />
                <Image source={{ uri: item.brandLogo }} style={styles.brandLogo} resizeMode="contain" />
                {item.isNew && (
                    <View style={styles.ribbonWrap}>
                        <Text style={styles.ribbonText}>New</Text>
                    </View>
                )}
            </View>

            <View style={styles.metaBox}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <View style={styles.metaRow}>
                    <Text style={styles.metaIcon}>🕒</Text>
                    <Text style={styles.metaText}>{item.time}</Text>
                </View>
                <View style={styles.metaRow}>
                    <Text style={styles.metaIcon}>📅</Text>
                    <Text style={styles.metaText}>{item.dateText} · {item.relative}</Text>
                </View>
                <View style={styles.metaRow}>
                    <Text style={styles.metaIcon}>📍</Text>
                    <Text style={styles.metaText}>{item.location}</Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(TaskCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E9EAEE',
    },
    heroBox: { width: '100%', backgroundColor: '#000' },
    heroImg: { position: 'absolute', inset: 0, width: '100%', height: '100%' },
    heroOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
    brandLogo: { position: 'absolute', top: 10, left: 12, width: 70, height: 20 },
    ribbonWrap: {
        position: 'absolute',
        right: -26,
        bottom: -6,
        backgroundColor: '#E9F4FF',
        transform: [{ rotate: '-40deg' }],
        paddingVertical: 4,
        paddingHorizontal: 28,
        borderRadius: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#B9DEFF',
    },
    ribbonText: { color: '#1C79D1', fontSize: 12, fontWeight: '700' },

    metaBox: { paddingHorizontal: 12, paddingVertical: 12 },
    taskTitle: { fontSize: 16, fontWeight: '700', color: '#1C1C1C', marginBottom: 8 },
    metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
    metaIcon: { marginRight: 8 },
    metaText: { color: '#5A5A5A' },
});
