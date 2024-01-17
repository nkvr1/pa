import { createStore, combineReducers, applyMiddleware } from "redux";
import OpportunityReducer from "../ReducerData/OpportunityReducer";
import secondReducer from "../ReducerData/secondReducer";
import reducer from "../ReducerData/reducer";
import { thunk } from "redux-thunk";
import CompaniesReducer from "../ReducerData/CompaniesReducer";

const rootReducer = combineReducers({
  OpportunityState: OpportunityReducer,
  secondState: secondReducer,
  CompaniesState: CompaniesReducer,
  reducerState: reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
