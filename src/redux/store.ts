import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {authReducer} from "./reducers/authReducer";
import {cartReducer} from "./reducers/cartReducer";

const reducer = combineReducers({
    authReducer,
    cartReducer,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(reducer, composedEnhancer)
// export const store = createStore(reducer, applyMiddleware(thunk, handleMessage))

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;