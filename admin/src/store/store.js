import {createStore,applyMiddleware} from  'redux'
//applyMiddleware 是redux中间件

import thunk from 'redux-thunk'  //调用异步中间件
import reducer from "./reducer"

export default createStore(reducer,applyMiddleware(thunk))