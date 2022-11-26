const initialState = {
    cart: []
}
export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter( i => i !== action.item);
        default:
            return state;
    }
};