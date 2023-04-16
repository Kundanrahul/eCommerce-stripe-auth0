import { createStore } from 'redux';

const initialState = {
  userProfile: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
}

export default store = createStore(reducer);
