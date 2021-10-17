import React, {FC, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {StoryList} from '../components/StoryList/StoryList';
import {getTopStoriesAction} from '../redux/actions/stories';
import {IAppState} from '../types/IAppState';

export const TopStoriesScreen: FC = () => {
  const stories = useSelector((state: IAppState) =>
    state.topStories.data.sort((a, b) => a.score - b.score),
  );
  const loading = useSelector((state: IAppState) => state.topStories.loading);

  console.log('stories', stories);

  const dispatch = useDispatch();

  const loadStories = useCallback(() => {
    dispatch(getTopStoriesAction);
  }, [dispatch]);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  return (
    <SafeAreaView style={styles.container}>
      <StoryList data={stories} refreshing={loading} onRefresh={loadStories} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
