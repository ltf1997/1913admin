import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      option:{        
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[                   
            ]
          }
        ]
      }
    }
  }
  componentDidMount(){
    this.$axios.get("/yapi/getPieData")
      .then((data)=>{
        console.log(data)
        let option = JSON.parse(JSON.stringify(this.state.option))//数值与之前一样的话不更新页面  所以用这个方法
        option.series[0].data = data.data.data
        this.setState({option})
      })
  }
  render(){
    return(
      <div className="home-box">
        <Card>
          <ReactEcharts option={this.state.option}/>
        </Card>
      </div>
    )
  }
}

export default Home