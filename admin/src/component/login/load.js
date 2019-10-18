import React from 'react'
import Loadable from 'react-loadable'
import './loader.less'

const loadingComponent=()=>{
  return(
    <div className="test">loading</div>
  )
}

//实为hoc
export default Loadable({
  loader:()=>import('./index'),
  //需要被懒加载的组件
  loading:loadingComponent
  //加载过程中显示的过场组件
})