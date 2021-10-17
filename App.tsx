import './utils/allSettledPolyfill';

import {Provider} from 'react-redux';

import store from './redux/store';
import {TopStoriesScreen} from './screens/TopStoriesScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TopStoriesScreen />
    </Provider>
  );
};

export default App;
