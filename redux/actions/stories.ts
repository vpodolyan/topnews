import {IStory} from '../../types/IStory';
import {GET_TOP_STORIES, GET_TOP_STORIES_SUCCESS} from './types';

export const getTopStoriesAction = {type: GET_TOP_STORIES};
export const getTopStoriesSuccessAction = (payload: IStory[]) => ({
  type: GET_TOP_STORIES_SUCCESS,
  payload,
});
