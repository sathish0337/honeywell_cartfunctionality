
import { ADD_TO_CART } from './action'

const initState = {
    items: [
        { id: 1, title: 'iphone', price: 10 },
        { id: 2, title: 'android', price: 20 },
        { id: 3, title: 'nokia', price: 30 },
        { id: 4, title: 'moto', price: 20 },
    ],
    cartItems: [],
    total: 0

}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let cartItem = state.items.find(item => item.id === action.id)
            let existed_item = state.cartItems.find(item => action.id === item.id)
            if (existed_item) {
                cartItem.quantity += 1
                return {
                    ...state,
                    total: state.total + cartItem.price
                }
            }
            else {
                cartItem.quantity = 1;
                let newTotal = state.total + cartItem.price

                return {
                    ...state,
                    cartItems: [...state.cartItems, cartItem],
                    total: newTotal
                }

            }
        default:
            return state
    }


}
export default reducer;