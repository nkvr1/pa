const initialState = {
  editingId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EDITING_ID":
      return {
        ...state,
        editingId: action.payload,
      };
    case "CLEAR_EDITING_ID":
      return {
        ...state,
        editingId: null,
      };
    default:
      return state;
  }
};

export default reducer;
