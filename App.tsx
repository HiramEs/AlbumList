import React from 'react';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
}

export default App;
