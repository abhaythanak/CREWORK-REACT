import { createContext, useContext, useReducer } from "react";

const CartSContext = createContext();
const CarDContext = createContext();


const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state,action.item]
         
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1)
            return newArr;
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer (reducer, []);

    return(
        <CarDContext.Provider value={dispatch}>
            <CartSContext.Provider value={state}>
                {children}
            </CartSContext.Provider>
        </CarDContext.Provider>
    )
}


export const useSCart = () => useContext(CartSContext)
export const useDCart = () => useContext(CarDContext)

