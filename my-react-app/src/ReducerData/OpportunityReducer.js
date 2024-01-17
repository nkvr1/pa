const initialState = {
  currentPage: 0,
  lastPage: 10,
  totalPages: 1,
  selectedValue: 10,
  dataLength: 100,
  searchTerm: "",
  posts: [],
  newposts: [],
  row: 0,
  rowData: [],
  newrow: [],
  Data: [],
  newData: [],
  newDataExtra: [],
  sortConfig: {
    column: null,
    direction: "descending",
  },
};
const OpportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASCENDING":
      const { payload: columnName } = action;
      const { column, direction } = state.sortConfig;
      const isAscending = column === columnName && direction === "ascending";

      const sortedData = [...state.newData].sort((a, b) => {
        if (a[columnName] < b[columnName]) {
          return isAscending ? -1 : 1;
        }
        if (a[columnName] > b[columnName]) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        newData: sortedData,
        newDataExtra: sortedData.slice(0, state.selectedValue),
        sortConfig: {
          column: columnName,
          direction: "ascending",
        },
      };
    case "ASCENDING1":
      const { payload: columnName1 } = action;
      const { column1, direction1 } = state.sortConfig;
      const isAscending1 =
        column1 === columnName1 && direction1 === "descending";

      const sortedData1 = [...state.newData].sort((a, b) => {
        if (a[columnName1] < b[columnName1]) {
          return isAscending1 ? -1 : 1;
        }
        if (a[columnName1] > b[columnName1]) {
          return isAscending1 ? 1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        newData: sortedData1,
        newDataExtra: sortedData1.slice(0, state.selectedValue),
        sortConfig: {
          column: columnName1,
          direction: "descending",
        },
      };

    case "ADD_COLUMN":
      return {
        ...state,
        newDataExtra: action.payload,
      };

    case "HANDLENEXTPAGE":
      const current =
        parseInt(state.currentPage) + parseInt(state.selectedValue);
      const last = parseInt(state.lastPage) + parseInt(state.selectedValue);
      return {
        ...state,
        currentPage:
          parseInt(state.currentPage) + parseInt(state.selectedValue),
        lastPage: Math.ceil(
          parseInt(state.lastPage) + parseInt(state.selectedValue)
        ),
        newDataExtra: state.newData.slice(current, last),
      };
    case "HANDLEPREPAGE":
      const current1 =
        parseInt(state.currentPage) - parseInt(state.selectedValue);
      const last1 = parseInt(state.lastPage) - parseInt(state.selectedValue);
      return {
        ...state,
        currentPage:
          parseInt(state.currentPage) - parseInt(state.selectedValue),
        lastPage: Math.ceil(
          parseInt(state.lastPage) - parseInt(state.selectedValue)
        ),
        newDataExtra: state.newData.slice(current1, last1),
      };
    case "DATASELECTED":
      return {
        ...state,
        selectedValue: action.payload,
        currentPage: 0,
        lastPage: action.payload,
        newDataExtra: state.newData.slice(0, action.payload),
        dataLength: state.newData.length,
      };
    case "DATA":
      return {
        ...state,
        newData: action.payload,
        Data: action.payload,
        newDataExtra: state.newData.slice(state.currentPage, state.lastPage),
        dataLength: state.newData.length,
      };
    case "DELETE":
      const length = state.newData.length - 1;
      return {
        ...state,
        newData: state.newData.filter((item) => item.id !== action.payload),
        newDataExtra: state.newDataExtra.filter(
          (item) => item.id !== action.payload
        ),
        dataLength: length,
      };
    case "ADD_ROW_SUCCESS":
      const Addlength = state.newData.length + 1;
      return {
        ...state,
        newData: [...state.newData, action.payload],
        newDataExtra: [...state.newDataExtra, action.payload],
        dataLength: Addlength,
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
                level: action.payload.rowData.level,
              }
            : row
        ),
        newDataExtra: state.newDataExtra.map((row) =>
          row.id === action.payload.id
            ? {
                ...row,
                title: action.payload.rowData.title,
                body: action.payload.rowData.body,
                level: action.payload.rowData.level,
              }
            : row
        ),
      };

    case "FILTEREDDATA":
      const filteredData = state.newData.filter((item) =>
        item.title.includes(action.payload)
      );
      const filtered = state.newData.length;

      return {
        ...state,
        currentPage: 0,
        dataLength: filtered,
        newData: filteredData,
        newDataExtra: filteredData.slice(0, state.selectedValue),
      };
    case "FILTERED":
      return {
        ...state,
        currentPage: 0,
        lastPage: state.selectedValue,
        dataLength: state.Data.length,
        newData: state.Data,
        newDataExtra: state.Data.slice(0, state.selectedValue),
      };

    // case "ADD_ROW_FAILURE":
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    case "EDITROW":
      return {
        ...state,
        row: action.payload,
      };
    // case "UPDATE_SEARCH_TERM":
    //   return {
    //     ...state,
    //     searchTerm: action.payload,
    //   };
    // case "SET_RECORDS_PER_PAGE":
    //   return {
    //     ...state,
    //     selectedValue: action.payload,
    //   };
    // case "SET_CURRENT_PAGE":
    //   return {
    //     ...state,
    //     currentPage: action.payload,
    //   };
    // case "SET_TOTAL_PAGES":
    //   return {
    //     ...state,
    //     totalPages: action.payload,
    //   };
    // case "FETCH_DATA_SUCCESS":
    //   return {
    //     ...state,
    //     posts: action.payload,
    //   };
    // case "DELETE_DATA_SUCCESS":
    //   return {
    //     ...state,
    //     posts: state.posts.filter((item) => item.id !== action.payload),
    //   };

    // case "EDIT_ROW_SUCCESS":
    //   const updatedRow = action.payload;
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //       post.id === updatedRow.id ? updatedRow : post
    //     ),
    //   };

    default:
      return state;
  }
};
export default OpportunityReducer;
