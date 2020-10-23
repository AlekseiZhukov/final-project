import {combineReducers, createStore} from "redux";
import signUpReducer from './signInReducer';
import signInReducer from "./signInReducer";
import adminPageReducer from "./adminPageReducer";
import TheftReportReducer from "./TheftReportReducer";
import homePageReducer from "./homePageReducer";

let reducers = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer,
    adminPage: adminPageReducer,
    theftForm: TheftReportReducer,
    homePage: homePageReducer
})

let store = createStore(reducers);

window.store = store

export default store;