import React from 'react'
import CustomNav from '../customNav'
import './index.less'
import TokenModel from '../model'

class Admin extends React.Component{
  render(){
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

export default Admin