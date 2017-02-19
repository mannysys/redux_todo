/**
 * 数据获取，状态更新
 */
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) return
        //分发到action
        dispatch( addTodo(input.value) )
        input.value = ''
      }}>
        <input ref={node => {input = node}}/>
        <button type='submit'>
          Add Todo
        <button/>
      </form>
    </div>
  )
}
//使用connect方法生成containers组件出来
AddTodo = connect()(AddTodo)


export default AddTodo
