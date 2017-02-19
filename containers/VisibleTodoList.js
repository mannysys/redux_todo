//纯碎的containers 逻辑和组件分离
/**
 * 将显示组件和逻辑组件分离
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//分发
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch( toggleTodo(id) )
    }
  }
}

//将TodoList组件组合后，传递给该组件2个函数
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
