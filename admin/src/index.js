import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';  // 更换根组件
import RootRouter from './router'
// import 'antd/dist/antd.css'
//从babel-loader中引入 antd的 less样式

import { Provider } from 'react-redux' // Provider的作用是将内容挂在根组件的上下文上 
import Store from './store/store'
import axios from './utils/axios'
import * as serviceWorker from './serviceWorker';

Component.prototype.$axios = axios
ReactDOM.render(

  <Provider store={Store}>
    <RootRouter />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
