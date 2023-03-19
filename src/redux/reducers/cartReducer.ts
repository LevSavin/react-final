import { SET_CART_COUNT } from "../actions"

const initialState = {
    count: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CART_COUNT":
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state
    }
}

export const setCartCount = (count) => {
    return(dispatch) => {
        dispatch(SET_CART_COUNT(count));
    }
}