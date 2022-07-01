import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMeddleWare from "redux-thunk";
import profile_Reducer from "./profile_Reducer";
import auth_Reducer from "./auth_Reducer";
import productCards_Reducer from "./productCards_Reducer";
import productItem_Reducer from "./productItem_Reducer";


let reducers = combineReducers({
    profilePage: profile_Reducer,
    auth:auth_Reducer,
    productCards:productCards_Reducer,
    productItemView:productItem_Reducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMeddleWare)
));


/*const store = createStore(reducers, applyMiddleware(thunkMeddleWare));*/


export default store;