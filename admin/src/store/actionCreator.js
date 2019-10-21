export default{
  // 同步
  changeTokenModel(params){
    let action={
      type:'CHANGE_TOKEN_MODEL',
      params:params
    }
    return action
  },

  // 异步触发
  changeTokenModelAsync(params){
    return (dispatch)=>{
      let action={
        type:'CHANGE_TOKEN_MODEL'
      }
      setTimeout(() => {
        let showModel = false
        action.params = showModel
        dispatch(action)
      }, 1000);
    }
  }

}