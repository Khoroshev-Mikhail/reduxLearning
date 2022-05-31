import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import { Provider } from 'react-redux';
import Component_1_Wrapper from './component/component_1_Wrapper'

store.subscribe(() => console.info(store.getState()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Component_1_Wrapper/>
    </Provider>
);
