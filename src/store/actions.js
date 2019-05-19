export const INCREASE = 'INCREASE'
export function increase() {
  return {
    type: INCREASE,
  }
}

export const DECREASE = 'DECREASE'
export function decrease() {
  return {
    type: DECREASE,
  }
}

export const INCREASE_ASYNC = 'INCREASE_ASYNC'
export const increaseAsync = () => dispatch => {
  dispatch({ type: INCREASE_ASYNC })

  setTimeout(() => {
    dispatch(increase())
  }, 1500)
}
