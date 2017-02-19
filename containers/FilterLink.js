/**
 * 逻辑组件 将state dispatch 分别转换成了props 作用在了显示组件上
 */
import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibility } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch( setVisibility( ownProps.filter ) )
    }
  }
}

//mapStateToProps 转换成 Link组件的属性
// mapDispatchToProps 作用于处理生成用户的输入，作用action
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
