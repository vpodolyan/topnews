import {Action, Middleware} from 'redux';

import {getStory, getTopStories} from '../../api/stories/storiesApi';
import {getUser} from '../../api/users/usersApi';
import {IStory} from '../../types/IStory';
import {getRandomItems} from '../../utils/getRandomItems';
import {getTopStoriesSuccessAction} from '../actions/stories';
import {GET_TOP_STORIES} from '../actions/types';

export const topStoriesMiddleware: Middleware =
  store => next => async (action: Action) => {
    const nextAction = next(action);

    if (action.type === GET_TOP_STORIES) {
      const topStories = await getTopStories();
      const topTenStories: number[] = getRandomItems(topStories, 10);
      const promises: Promise<IStory>[] = [];

      topTenStories.forEach(async storyId => {
        promises.push(
          new Promise(async resolve => {
            const story = await getStory(storyId);
            const user = await getUser(story.by);

            const result: IStory = {
              id: story.id,
              title: story.title,
              url: story.url,
              score: story.score,
              time: story.time,
              authorId: story.by,
              authorKarmaScore: user.karma,
            };

            resolve(result);
          }),
        );
      });

      const values = await Promise.allSettled(promises);

      const payload = values
        .filter(p => p.state === 'fulfilled')
        .map(p => p.value);

      store.dispatch(getTopStoriesSuccessAction(payload));
    }

    return nextAction;
  };
