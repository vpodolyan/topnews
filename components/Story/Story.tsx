import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {IStory} from '../../types/IStory';

interface IProps {
  story: IStory;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Story: FC<IProps> = ({story, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.url}>{story.url}</Text>
      <View style={styles.row}>
        <Text>{new Date(story.time * 1000).toLocaleString()}</Text>
        <Text>Score: {story.score}</Text>
      </View>
      <View style={styles.row}>
        <Text>Author: {story.authorId}</Text>
        <Text>Karma: {story.authorKarmaScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  url: {
    fontSize: 12,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
});
