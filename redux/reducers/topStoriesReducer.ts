import {AnyAction} from 'redux';

import {ITopStoriesState} from '../../types/ITopStoriesState';
import {GET_TOP_STORIES, GET_TOP_STORIES_SUCCESS} from '../actions/types';

const defaultState: ITopStoriesState = {
  data: [],
  loading: false,
};

export const topStoriesReducer = (
  state: ITopStoriesState = defaultState,
  action: AnyAction,
) => {
  switch (action.type) {
    case GET_TOP_STORIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_TOP_STORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
  }

  return state;
};
