// import {
//   GET_TAX_REQUESTED,
//   GET_TAX_SUCCESS,
//   GET_TAX_FAILED,
//   UPDATE_TAX_REQUESTED,
//   UPDATE_TAX_SUCCESS,
//   UPDATE_TAX_FAILED,
//   CREATE_TAX_REQUESTED,
//   CREATE_TAX_SUCCESS,
//   CREATE_TAX_FAILED,
//   ERROR_LOADING_HANDLER,
// } from "../constants/taxConstants";

// const initState = {
//   taxList: [],
//   locations: [],
//   hasErrorTaxList: false,
//   isLoadingTaxList: false,
//   errorMessage: null,
//   hasErrorPostUpdateTax: false,
//   isLoadingPostUpdateTax: false,
//   hasErrorPostCreateTax: false,
//   isLoadingPostCreateTax: false,
// };

// const taxReducer = (state = initState, action) => {
//   let newState = state;
//   switch (action.type) {
//     case GET_TAX_REQUESTED:
//       newState = { ...state, ...action.payload };
//       break;
//     case GET_TAX_SUCCESS:
//       newState = { ...state, ...action.payload };
//       break;
//     case GET_TAX_FAILED:
//       newState = { ...state, ...action.payload };
//       break;
//     case UPDATE_TAX_REQUESTED:
//       newState = { ...state, ...action.payload };
//       break;
//     case UPDATE_TAX_SUCCESS:
//       newState = { ...state, ...action.payload };
//       break;
//     case UPDATE_TAX_FAILED:
//       newState = { ...state, ...action.payload };
//       break;
//     case CREATE_TAX_REQUESTED:
//       newState = { ...state, ...action.payload };
//       break;
//     case CREATE_TAX_SUCCESS:
//       newState = { ...state, ...action.payload };
//       break;
//     case CREATE_TAX_FAILED:
//       newState = { ...state, ...action.payload };
//       break;
//     case ERROR_LOADING_HANDLER:
//       newState = { ...state, ...action.payload };
//       break;
//     default:
//       break;
//   }
//   return newState;
// };
// export default taxReducer;
