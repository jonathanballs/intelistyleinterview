export const reducer = (state = { garments: [] }, action) => {
  switch (action.type) {
    case 'FETCH_GARMENTS':
      if (!action.payload) return state;
      return {
        ...state,
        garments: action.payload,
      }
    default:
      return state
  }
}
