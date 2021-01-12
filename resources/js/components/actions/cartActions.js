import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, DELETE_ITEM, CLEAR_ITEMS, HANDLE_DETAILS } from './action-types/cart-actions';
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
}

export const clearItems = () => {
    return {
        type: CLEAR_ITEMS
    }
}
