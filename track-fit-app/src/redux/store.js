import {applyMiddleware} from "redux";
import {legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { fitnessReducer } from "../reducers/fitnessReducer";

const store = createStore(fitnessReducer,applyMiddleware(thunk));

export default store;