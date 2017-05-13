import axios from 'axios';

import { UPC_URL } from '../api';

exports.findUpc = (upc) => {
  return function(dispatch) {
    return axios.get(UPC_URL, { params: { upc: upc }})
    .then((response) => {
      if(response.data){
        var { product_name } = response.data;
        dispatch({
          type: 'DISPLAY_RESULT',
          product_name: product_name,
          upc: upc
        });
      } else {
        dispatch({
          type: 'DISPLAY_UNKNOWN',
          upc: upc
        })
      }
    })
    .catch((err) => {
      console.log('Unable to connect', err);
    })
  }
}
