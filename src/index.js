import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ideasReducer } from './reducers';
import { AppContainer } from 'react-hot-loader';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  const state = localStorage.getItem('ideas-state');
  if (state === null) {
    return undefined;
  }
  return JSON.parse(state);
};

const saveState = state => {
  const newState = JSON.stringify(state);
  localStorage.setItem('ideas-state', newState);
};

const persistedState = loadState();

const store = createStore(
  combineReducers({
    ideasReducer
  }),
  persistedState,
  composeEnhancers(compose(applyMiddleware()))
);

store.subscribe(() => saveState(store.getState()));

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
