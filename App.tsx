import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostListComponent from './PostListComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostListComponent />
      </div>
    </Provider>
  );
}

export default App;
