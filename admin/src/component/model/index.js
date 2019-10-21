import React ,{Fragment}from 'react'
import { Card } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class TokenModel extends React.Component{
  render(){
    console.log(this,"model")
    let {tokenModel} = this.props 
    return(
      <Fragment>
        {!tokenModel || 
          <div className="token-model">
            <Card title="token失效">
              token丢失或失效， 请重新登录
              <button onClick={()=>{
                this.props.history.push('/login')
              }
              }>去登录</button>
            </Card>
          </div>
        }
      </Fragment>
    )
  }
}

export default connect(state=>state)(withRouter(TokenModel))