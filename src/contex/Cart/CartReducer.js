
import React from 'react'

const  CartReducer=(state,action)=>{
    switch (action.type) {
        case "ADD_TO_CART": {
       let { item, amount } = action.payload;  
         let existingProduct = state.cart.find(
                  (curItem) => curItem.id == item.id 
                );
            
                if (existingProduct) {
                  let updatedProduct = state.cart.map((curElem) => {
                    if (curElem.id == item.id) {
                      let newAmount = curElem.amount + amount;
            
                      // if (newAmount >= curElem.max) {
                      //   newAmount = curElem.max;
                      // }
                      return {
                        ...curElem,
                        amount: newAmount,
                      };
                    } else {
                      return curElem;
                    }
                  });
                  return {
                    ...state,
                    cart: updatedProduct,
                  };
                } else {
                  let cartProduct = {
                    id:item.id,
                    pname: item.pname,
                    amount,
                    pimagename:item.pimagename,
                    price: item.price
                  
                  };
            
                  return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                  };
                }
              }
        case "REMOVE_ITEM": {
         return {
             ...state,
            cart: state.cart.filter(
              (item) => item.id !== action.payload
                            ),
                          };
                        }
        case "CLEAR_CART":{
                            return {
                              ...state,
                              cart: [],
                            };
                          }
        case  "SET_DECREMENT":{
         let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
            let decAmount = curElem.amount - 1;
                        
            if (decAmount <= 1) {
               decAmount = 1;
                              }
                return {
                    ...curElem,
                       amount: decAmount,
                              };
                              } else {
                                return curElem;
                              }
                            });
        return { ...state, cart: updatedProduct };
                          }
                        
           case  "SET_INCREMENT" : {
          let updatedProduct = state.cart.map((curElem) => {
              if (curElem.id === action.payload) {
             let incAmount = curElem.amount + 1;
                        
                if (incAmount >= 10) {
                                  incAmount = 10;
                                }
                        
                return {
                           ...curElem,
                      amount: incAmount,
                                };
                              } else {
                                return curElem;
                              }
                            });
            return { ...state, cart: updatedProduct };
                          }
             case "CART_TOTAL_ITEM" : {
            let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
                    let { amount } = curElem;
                        
                   initialVal = initialVal + amount;
                    return initialVal;
                            }, 0);
                        
                            return {
                              ...state,
                              totalItems: updatedItemVal,
                            };
                          } 
              case "CART_TOTAL_PRICE": {
                let totalprice = state.cart.reduce((initialVal, curElem) => {
                 let { price, amount } = curElem;

                  initialVal = initialVal + price * amount;
                      return initialVal;
                            }, 0);
                        
                            return {
                              ...state,
                              totalprice,
                            };
                          }             
                                    
        
    default:
       return state;

    }

}
export default CartReducer 