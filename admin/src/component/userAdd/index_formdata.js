import React from 'react'
import {Card} from 'antd'
import './index.less'


class UserAdd extends React.Component{
  submit=()=>{
    let file = this.refs.file.files[0]

    let formdata = new FormData()
    formdata.append('img',file)
    // console.log(formdata)  //打印为空
    // console.log(formdata.get('img'))  //打印到对象
    // console.log(file)

    let config = {
      headers:{'Content-Type':'multipart/form-data'}
    }
    this.$axios.post('/api/admin/file/upload',formdata,config)
    .then((data)=>{
      console.log(data)
    })
  }
  render(){
    return(
      <div className="userAdd-box">
        <Card>
          添加信息
          <input type="file" ref="file"/>
          <button onClick={this.submit}>上传</button>
        </Card>
      </div>
    )
  }
}

export default UserAdd