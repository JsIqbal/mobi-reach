// Combine all of the reducers
import counterSlice from "./counter/counter-slice";
import tableSlice from "./table/table-slice";
import userSlice from "./user/user-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterSlice: counterSlice,
    tableSlice: tableSlice,
    userSlice: userSlice
});

export default rootReducer;