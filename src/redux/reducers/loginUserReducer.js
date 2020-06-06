const loginUserReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case 'LOAD_LOGIN_USER':
      return action.payload;
    default:
      return state;
  }
};

export default loginUserReducer;
