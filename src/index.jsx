import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import MobxStore from './store/mobX-Store';


const Root = (
  <Provider MobxStore={MobxStore}>
    <App />
  </Provider>
);


ReactDOM.render(Root, document.getElementById('root'));

serviceWorker.unregister();
