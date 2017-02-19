/**
 * 将 todo和visiblityFilter 拆分到不同文件的reducer合在一起
 */
import todos from './todo'
import visiblityFilter from './visiblityFilter'
import { combineReducers } from 'redux'

const todoApp = combineReducers({
  todos,
  visiblityFilter
})

export default todoApp
