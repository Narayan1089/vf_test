import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ListRenderItem, View } from 'react-native';
import type { TrendingTask } from '../..//brands/types';
import TaskCard from './TaskCard';

type Props = { data: TrendingTask[] };

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TrendingCarousel: React.FC<Props> = ({ data }) => {
  const CARD_GAP = 14;
  const CARD_WIDTH = Math.round(SCREEN_WIDTH * 0.86);
  const SIDE_SPACER = Math.round((SCREEN_WIDTH - CARD_WIDTH) / 2);

  const flatRef = useRef<FlatList<TrendingTask>>(null);
  const [index, setIndex] = useState(0);

  // auto-scroll every 3s
  useEffect(() => {
    if (!data?.length) return;
    const id = setInterval(() => {
      setIndex(prev => {
        const next = (prev + 1) % data.length;
        flatRef.current?.scrollToOffset({
          offset: next * (CARD_WIDTH + CARD_GAP),
          animated: true,
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [data, CARD_WIDTH]);

  const onMomentumScrollEnd = useCallback((ev: any) => {
    const x = ev.nativeEvent.contentOffset.x;
    const newIndex = Math.round(x / (CARD_WIDTH + CARD_GAP));
    setIndex(newIndex);
  }, [CARD_WIDTH]);

  const renderTask: ListRenderItem<TrendingTask> = useCallback(
    ({ item }) => <TaskCard item={item} cardWidth={CARD_WIDTH} />,
    [CARD_WIDTH]
  );

  return (
    <FlatList
      ref={flatRef}
      data={data}
      keyExtractor={(it) => it.id}
      renderItem={renderTask}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: SIDE_SPACER }}
      ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
      onMomentumScrollEnd={onMomentumScrollEnd}
    />
  );
};

export default React.memo(TrendingCarousel);
