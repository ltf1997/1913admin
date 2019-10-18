import React from 'react'

class Admin extends React.Component{
  render(){
    return(
      <div className="admin">
        <div className="admin-nav">
          侧边栏
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