import {combineReducers, createStore} from "redux";
import adminPageReducer from "./adminPageReducer";
import TheftReportReducer from "./TheftReportReducer";
import homePageReducer from "./homePageReducer";
import bikePageReducer from './bikePageReducer'
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    header: headerReducer,
    adminPage: adminPageReducer,
    theftForm: TheftReportReducer,
    homePage: homePageReducer,
    bikePage: bikePageReducer
})

let store = createStore(reducers);

window.store = store

export default store;