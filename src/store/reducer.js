import * as actions from './actions'

const initState = {
  value: 0,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.INCREASE:
      return {
        ...state,
        value: state.value + 1,
      }
    case actions.DECREASE:
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return { ...state }
  }
}
