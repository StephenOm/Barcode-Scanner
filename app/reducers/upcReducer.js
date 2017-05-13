module.exports = (state = {}, action) => {
  switch(action.type) {
    case 'DISPLAY_RESULT':
      return {
        product_name: action.product_name,
        upc: action.upc
      }
    case 'DISPLAY_UNKNOWN':
      return {
        product_name: 'UPC not found',
        upc: action.upc
      }
    default:
      return state;
  }
}
