import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
// import Login from './component/login/load'
// import Admin from './component/admin'
// import Home from './component/home'
// import User from './component/user'
//使用路由懒加载

import ComponentInport from './utils/componentImport'

const Login = ComponentInport(()=>import('./component/login'))//仅传一个参数  另一个为默认值
const Admin = ComponentInport(()=>import('./component/admin'))
const Home = ComponentInport(()=>import('./component/home'))
const User = ComponentInport(()=>import('./component/user'))
//打包回多出几个相应文件
class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        
        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={()=>{
            return(
              <Admin>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/user" component={User}/>
              </Admin>
            )
          }}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter