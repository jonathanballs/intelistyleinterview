export const reducer = (state = { loading: true, garments: [] }, action) => {
  switch (action.type) {
    case 'FETCH_GARMENTS':
      if (!action.payload) {
        return {
          ...state,
          loading: true,
        }
      } else {
        return {
          loading: false,
          garments: action.payload,
        }
      }
    default:
      return state
  }
}
