import React from 'react'
import CustomNav from '../customNav'
import './index.less'
import TokenModel from '../model'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'

class Admin extends React.Component{
  componentDidMount(){
    // this.props.changeTokenModel(true)  
    // 同步做法

    this.props.changeTokenModelAsync()
    //已经将异步封装到 actionCreator中
  }
  render(){
    console.log('首页',this)
    return(
      <div className="admin">
        <TokenModel/>
        <div className="admin-nav">
          <CustomNav/>
        </div>
        <div className="admin-content">
          <div>
            头部
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            底部
          </div>

        </div>
        </div>
    )
  }
}

export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(Admin) //获得state中的changeTokenModel值  打印this可见