import { CARD_ADD_ITEM } from "../constants/cartConstant"

export const cartReducer = ( state={ cartItems: []}, action) =>{
    switch(action.type){
        case CARD_ADD_ITEM:
           const item = action.payload
           const chkItem = state.cartItems.find(data => data.product === item.product)
           if(chkItem){
                    return{
                        ...state,
                        cartItems: state.cartItems.map(data => data.product ===  chkItem.product ? item : data)
                    }
            } else {
                return{ 
                        ...state, 
                        cartItems: [...state.cartItems, item]
                  }
             }
       default: 
           return state;

    }
}