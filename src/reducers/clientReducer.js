import { types } from "../types/types";

const initialState = {      
    activeClient:null,
    autoClient:null
}
export const clientReducer = (state = initialState, action) => {
    switch (action.type) {                        
            case types.clientSetActive:
            return{
                ...state,
                activeClient:action.payload
            }
            case types.autoSetActive:
            return{
                ...state,
                autoClient:action.payload
            }
        default:
            return state;
    }
}