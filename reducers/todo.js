
//根据传递的旧的 state 和 action行为对象，处理完返回一个新的state
const todo = (state, action) => {

  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case 'TOGGLE_TODO':
      //检查id是否和该行为一样
      if(state.id !== action.id){
        return state
      }else{
        //将旧对象和新对象合并一个新对象
        return Object.assign({}, state, {
          completed: !state.completed
        })
      }
    default:
      return state
  }

}

const todos = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}


export default todos
