import {combineReducers, createStore} from "redux";
import signUpReducer from './signUpReducer';
import signInReducer from "./signInReducer";
import adminPageReducer from "./adminPageReducer";
import TheftReportReducer from "./TheftReportReducer";
import homePageReducer from "./homePageReducer";
import bikePageReducer from './bikePageReducer'

let reducers = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer,
    adminPage: adminPageReducer,
    theftForm: TheftReportReducer,
    homePage: homePageReducer,
    bikePage: bikePageReducer
})

let store = createStore(reducers);

window.store = store

export default store;