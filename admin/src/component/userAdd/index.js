import React from 'react'
import {Card} from 'antd'
import './index.less'


class UserAdd extends React.Component{
  constructor(props){
    super(props)
    this.state={
      img:''
    }
  }
  submit=()=>{
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
          添加信息
          <input type="file" ref="file"/>
          <button onClick={this.submit}>上传</button>
          <img src={this.state.img}/>
        </Card>
      </div>
    )
  }
}

export default UserAdd