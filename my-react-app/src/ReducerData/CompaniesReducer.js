const initialState = {
  currentPage: 0,
  lastPage: 10,
  totalPages: 1,
  selectedValue: 10,
  searchTerm: "",
  posts: [],
  newposts: [],
  row: 0,
  rowData: [],
  newrow: [],
  newData: [],
  newDataExtra: [],
};
const CompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        newData: state.newData.filter((item) => item.id !== action.payload),
        newDataExtra: state.newDataExtra.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "EDIT_ROW":
      return {
        ...state,
        newData: state.newData.map((row) =>
          row.id === action.payload.id
            ? {
                ...row,
                title: action.payload.rowData.title,
                body: action.payload.rowData.body,
              }
            : row
        ),
        newDataExtra: state.newDataExtra.map((row) =>
          row.id === action.payload.id
            ? {
                ...row,
                title: action.payload.rowData.title,
                body: action.payload.rowData.body,
              }
            : row
        ),
      };

    case "ADD_ROW_SUCCESS":
      return {
        ...state,
        newData: [...state.newData, action.payload],

        error: null,
      };
    case "ADD_ROW_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "edit_row":
      return {
        ...state,
        row: action.payload,
      };
    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_RECORDS_PER_PAGE":
      return {
        ...state,
        selectedValue: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE_DATA_SUCCESS":
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };

    case "EDIT_ROW_SUCCESS":
      const updatedRow = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === updatedRow.id ? updatedRow : post
        ),
      };

    default:
      return state;
  }
};
export default CompaniesReducer;
