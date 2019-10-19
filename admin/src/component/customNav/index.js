import React from 'react'
import {withRouter} from 'react-router-dom'
import {Menu} from 'antd'
const {SubMenu} = Menu

let navData =[
  {name:'首页',path:'/admin/home'},
  {name:'设置',path:'/admin/setting'},
  {name:'用户管理',path:'/user',
    children:[
      {name:'用户列表',path:'/user/list'},
      {name:'用户删除',path:'/user/del'},
    ]
  }
]

class CustomNav extends React.Component{
  jump=(path)=>{
    this.props.history.push(path)
  }
  renderItem=(data)=>{     //
    return data.map((item,index)=>{
      if(item.children){
        return (
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
      }
      
    })
  }
  render(){
    console.log('自定义导航',this)
    return(
      <div className="customNav">
        <Menu style={{ width: 256 }} mode="vertical">    
          {this.renderItem(navData)}


          {/* <Menu.Item key="1">首页</Menu.Item>        
          <Menu.Item key="2">设置</Menu.Item>        
          <SubMenu
            key="sub2"
            title="用户管理"      
          >
            <Menu.Item key="5">用户列表</Menu.Item>        
            <Menu.Item key="6">用户删除</Menu.Item>             
          </SubMenu> 
          <SubMenu
            key="sub2"
            title="管理员管理"      
          >
            <Menu.Item key="5">权限列表</Menu.Item>        
            <Menu.Item key="6">权限删除</Menu.Item>             
          </SubMenu>          */}

          {/* {navData.map((item,index)=>{
            if(item.children) return <SubMenu title={item.name}></SubMenu>
            return(
              <Menu.Item>{item.name}</Menu.Item>
            )
          })} */}

        </Menu>
      </div>
    )
  }
}

export default withRouter(CustomNav)