import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main';

import store from './store';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default App;
