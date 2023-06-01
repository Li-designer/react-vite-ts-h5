const initialState = {
  currentUser: null,
};

const reducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);
