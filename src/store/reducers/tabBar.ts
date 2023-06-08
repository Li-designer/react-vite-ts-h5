// 初始化state
const initialState = {
  tabBar: localStorage.getItem('tabBar') || 'home',
};

// action
const tabBar = (state: any = initialState, action: { type: string, key: string }) => {
  switch (action.type) {
    case 'TOGGLE_TABBAR':
      return {
        ...state,
        tabBar: action.key,
      };
    default:
      return state;
  }
};


export default tabBar
