import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import TodoStore from './store/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={new TodoStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
