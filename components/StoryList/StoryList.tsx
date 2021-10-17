import React, {FC} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';

import {IStory} from '../../types/IStory';
import {Story} from '../Story/Story';

interface IProps {
  data: IStory[];
  refreshing: boolean;
  onRefresh: () => void;
}

export const StoryList: FC<IProps> = ({data, refreshing, onRefresh}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Story story={item} containerStyle={styles.listItem} />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});
