import React from 'react'
import {Card,Table,Spin,Pagination} from 'antd'
import UserUpdata from '../userUpdata'
import './index.less'


const columns = [
  {
    title: '姓名',
    width:150,
    dataIndex: 'name',
    key: 'name',
    fixed:'left',
  },
  {
    title: '年龄',
    width:150,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    width:150,
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '图片1',
    dataIndex: 'img1',
    width:150,
    key: 'img1',
    render(imgpath1){
      return (
        <img src={imgpath1} alt="" width='50' height='50'/>     
      )
    }
  },
  {
    title: '图片2',
    dataIndex: 'img2',
    width:150,
    key: 'img2',
    render(imgpath2){
      return (
        <img src={imgpath2} alt="" width='50' height='50'/>
      )
    }
  },
  {
    title: '性别',
    width:150,
    dataIndex: 'sex',
    key: 'sex',
    render(data){
      let arr = ['未知','男','女']
      return (
        <span>{arr[data]}</span>
      )
    }
  },
]

// let dataSource = [
//   {name:'zhu1',age:100,address:'BJ',sex:1,key:1},
//   {name:'zhu2',age:100,address:'BJ',sex:1,key:2},
//   {name:'zhu3',age:100,address:'BJ',sex:1,key:3},
//   {name:'zhu4',age:100,address:'BJ',sex:1,key:4},
// ]

class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      spinning:true,
      nowPage:1,
      list:[],
      updataState:false,
      updataData:null
    }
  }
  componentDidMount(){
    let {page} = this.state.nowPage
    this.refreshData(page)
  }
  refreshData=(page)=>{

    this.setState({spinning:true,updataState:false}) //修改后顺便关闭模态框  子父通信传递该方法

    let url = `/api/getThemeById?themeid=3&page=${page}`
    this.$axios.get(url)
    .then((data)=>{
    //本地图片修改地址添加域名在这里先进行处理
      let list = data.data.products.map((item)=>{
        item.imgPath = 'http://localhost:3000' + item.imgPath
        return item
      })
      console.log(data)
      this.setState({spinning:false,list:list})
    })
    .catch(() => {
      this.setState({spinning:false})
    })
  }
  updata=()=>{
    this.setState({updataState:true})
  }
  render(){
    let {spinning,list} = this.state
    return(
      <div className="userlist-box">
        {!this.state.updataState || <UserUpdata data={this.state.updataData} refreshData={this.refreshData}></UserUpdata>}
        <button onClick={this.updata}>修改</button>
        {/* 设置修改按钮点击改变出现模态框  并将点击项的 data给this.state.updataData   让组件通过 props传递渲染表单*/}
        <Card style={{background:'pink',width:'1200px',margin:'0px auto'}}>
          <Spin spinning={spinning}>
            <Table 
            pagination={false}
            dataSource={list} 
            // dataSource={dataSource}
            columns={columns}
            scroll={{y:350,x:450}}
            >

            </Table>
            <Pagination simple defaultCurrent={1} total={50} pageSize={20}
              onChange={(page,pageSize)=>{
                this.refreshData(page)
                console.log(page,pageSize)
              }}
            />
          </Spin>
        </Card>
      </div>
    )
  }
}

export default UserList