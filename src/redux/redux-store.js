import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMeddleWare from "redux-thunk";
import profile_Reducer from "./profile_Reducer";


let reducers = combineReducers({
    profilePage: profile_Reducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMeddleWare)
));


/*const store = createStore(reducers, applyMiddleware(thunkMeddleWare));*/


export default store;