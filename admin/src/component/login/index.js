import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';
class Login extends React.Component {
  submit=()=>{
    console.log('登录')
    // let result = this.props.form.getFieldsValue()
    // console.log(result)
    this.props.form.validateFields((err,data)=>{
      if(err){
        message.error('信息有误')
      }else{
        message.success('登录成功 1s后跳转...',1,()=>{
          this.props.history.push('/admin')
        })
      }
    })
  }
  render() {
    // console.log(this,'登录组件')
    let {getFieldDecorator} = this.props.form
    return (
      <Card style={{width:'400px',position:"fixed",top:'17vh',right:'70px'}}>
        <div onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>   
            {getFieldDecorator('us',{
              rules:[{required:true,message:'请输入用户名'},
                {min:6,message:'长度不能小于6'},
                {max:9,message:'长度不能超过9'}
              ]
            })(
              <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
              />        
            )}  
              
          </Form.Item>
          <Form.Item>  
          {getFieldDecorator('ps',{})(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}   
              
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" onClick={this.submit} htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </div>
      </Card>
    );
  }
}

//Form.create 可以注册更多的 form 方法
export default Form.create()(Login)