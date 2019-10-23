import React from 'react'
import {Card,message} from 'antd'
import './index.less'


class UserAdd extends React.Component{
  constructor(props){
    super(props)
    this.state={
      img:'',
      name:'',
      price:'',
      desc:''
    }
  }
  submit=()=>{
    console.log(this.state)
    if(this.state.img===""){
      message.error('请上传图片')
    }else{
      //发起 Ajax请求
    }
  }

  upload=()=>{
    let file = this.refs.file.files[0] //获取文件

    /////base64
    var r = new FileReader() //本地浏览 创建读取对象
    r.onload = ()=>{  //onload转化成 base64 读取上面对象编译成功后执行
      console.log(r.result)  //打印出 图片 base64
      this.setState({img:r.result})
    }
    r.readAsDataURL(file)  //通过读取对象读取文件
    /////
  }
  render(){
    return(
      <div className="userAdd-box">
        <Card>
          添加信息<br/>
          <label>名称：</label><input type="text" value={this.state.name} onChange={
            (e)=>{this.setState({name:e.target.value})}}
          /><br/>
          <label>价格：</label><input type="text" value={this.state.price} onChange={
            (e)=>{this.setState({price:e.target.value})}}
          /><br/>
          <label>描述：</label><input type="text" value={this.state.desc} onChange={
            (e)=>{this.setState({desc:e.target.value})}}
          /><br/>
          

          <input type="file" ref="file"/>
          <button onClick={this.upload}>上传</button>
          <img src={this.state.img}/>
          <br/>
          <button onClick={this.submit}>提交</button>
        </Card>
      </div>
    )
  }
}

export default UserAdd