import { removeData } from 'jquery';
import Item1 from '../../images/item1.jpg';
import Item2 from '../../images/item2.jpg';
import Item3 from '../../images/item3.jpg';
import Item4 from '../../images/item4.jpg';
import Item5 from '../../images/item5.jpg';
import Item6 from '../../images/item6.jpg';
import { ADD_QUANTITY, SUB_QUANTITY, ADD_TO_CART, CLEAR_ITEMS, DELETE_ITEM } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        { id: 1, title: 'Winter body - Warm and freshy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        { id: 2, title: 'Adidas - Perfect shoes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, title: 'Vans - Summer break shoes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, title: 'White - Modern & Fancy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, title: 'Cropped-sho - Perfect fit', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, title: 'Blues - Be unique', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    ],
    addedItems: !JSON.parse(localStorage.getItem('cart')) ? [] : JSON.parse(localStorage.getItem('cart')),
    total: !JSON.parse(localStorage.getItem('cart_total')) ? 0 : parseFloat(JSON.parse(localStorage.getItem('cart_total'))),
    localCart:''
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existed_item = state.addedItems.find(item => action.id === item.id);

        if (existed_item) {
            existed_item.quantity += 1;

            localStorage.setItem('cart_total',JSON.stringify(state.total + addedItem.price));

            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;

            localStorage.setItem('cart_total',JSON.stringify(newTotal));
            localStorage.setItem('cart',JSON.stringify([...state.addedItems, addedItem]));

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.addedItems.find(item => item.id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;

        localStorage.setItem('cart_total',JSON.stringify(newTotal));
        localStorage.setItem('cart',JSON.stringify([...state.addedItems]));

        return {
            ...state,
            addedItems: [...state.addedItems],
            total: newTotal
        }

    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.addedItems.find(item => item.id === action.id);
        let newTotal = 0;
        let leftItems = [];

        addedItem.quantity -= 1;
        newTotal = state.total - addedItem.price;

        if (addedItem.quantity <= 0) {
            leftItems = state.addedItems.filter(item => item !== addedItem);

            leftItems ? localStorage.setItem('cart',JSON.stringify(leftItems)) : '';
            localStorage.setItem('cart_total',JSON.stringify(newTotal))

            return {
                ...state,
                localCart: '',
                addedItems: leftItems.length ? leftItems : [],
                total: newTotal
            }
        }
        localStorage.setItem('cart',JSON.stringify([...state.addedItems]))
        localStorage.setItem('cart_total',JSON.stringify(newTotal))

        return {
            ...state,
            localCart: '',
            addedItems: [...state.addedItems],
            total: newTotal
        }

    }

    if (action.type === DELETE_ITEM) {
        let deletedItem = state.items.find(item => item.id === action.id);
        let newTotal = state.total - deletedItem.price;

        let itemsLeft = state.addedItems.filter(item => item !== deletedItem);

        itemsLeft ? localStorage.setItem('cart',JSON.stringify(itemsLeft)) : '';
        return {
            ...state,
            localCart: '',
            addedItems: itemsLeft.length ? itemsLeft : [],
            total: newTotal
        }
    }
    if (action.type === CLEAR_ITEMS) {
        localStorage.setItem('cart_total',JSON.stringify(0))
        localStorage.setItem('cart',JSON.stringify([]));

        return {
            ...state,
            addedItems:  [],
            localCart:'',
            total: 0
        }
    }

    return state

}

export default cartReducer;
