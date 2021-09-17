import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import userReducer from "../reducers/userReducer";
import loginReducer from "../reducers/loginReducer";



// check if is in DEV env, if true also check if is installed devtools and then return devtools and thunk
// else only apply thunk
const middlewares = process.env.REACT_APP_DEV_ENV ? 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
: applyMiddleware(thunk)

console.log(middlewares)
// just add reducers here
export const groupedReducers = combineReducers({
    loginState: loginReducer,
    userState: userReducer
})


const configureStore = createStore(
    groupedReducers,
    middlewares
)

export default configureStore