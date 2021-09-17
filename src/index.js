import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import './Styles/FooterChatAlsoViewed.css'
import './Styles/NavBar.css'
import './Styles/General.css'
import './Styles/activityAboutCreatePost.css'
import './Styles/EducationLoaderProfModal.css'
import './Styles/WorkModal.css'
import store from '../src/redux/store'
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,

  document.getElementById('root')
);


