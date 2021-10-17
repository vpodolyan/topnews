import {combineReducers} from 'redux';

import {topStoriesReducer} from './topStoriesReducer';

export default combineReducers({
  topStories: topStoriesReducer,
});
