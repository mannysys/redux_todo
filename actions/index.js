
let nextTodoId = 0

//添加数据
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId,
    text
  }
}

//过滤数据
export const setVisibility = (filter) => {
  return {
    type: 'SET_VISIBILITY',
    filter
  }
}

//标记那条待办项数据 是完成的
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
