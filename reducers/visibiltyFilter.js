

const visiblityFilter = (state='SHOW_ALL', action) => {

  switch (action.type) {
    case SET_VISIBILITY:
      return action.visiblityFilter
    default:
      return state
  }

}

export default visiblityFilter
