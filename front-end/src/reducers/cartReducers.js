import { CARD_ADD_ITEM, CARD_REMOVE_ITEM, CARD_SAVE_SHIPPING_ADDRS } from "../constants/cartConstant"

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
         case CARD_REMOVE_ITEM:
        
             return{
                ...state,
                cartItems: state.cartItems.filter(data => data.product !== action.payload)
            }   
        case CARD_SAVE_SHIPPING_ADDRS:
    
            return{
                    ...state,
                       shippingaddress: action.payload
                }    
       default: 
           return state;

    }
}