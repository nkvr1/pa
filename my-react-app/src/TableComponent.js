// // TableContainer.js

// import { connect } from "react-redux";
// import Table from "./Table";
// import { deleteRow, editRow } from "./tableActions";

// const mapStateToProps = (state) => {
//   return {
//     data: state.tableData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (rowId) => {
//       dispatch(deleteRow(rowId));
//     },
//     onEdit: (rowData) => {
//       // Implement your edit logic here
//       // e.g., open a modal with the rowData for editing
//       console.log("Editing row:", rowData);
//     },
//   };
// };

// const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);

// export default TableContainer;
