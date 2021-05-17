import { fetchCustom } from "../helpers/fetch";
import { types } from "../types/types";

export const clientAddNew = (client) =>{    
    return async(dispatch) => {                
        try {
            let endpoint="";
            let method="GET";
            const apexApiCall = await fetchCustom(endpoint,client,method);
            const dataJson = await apexApiCall.json();         
            client.txtUser=dataJson['results'][0]['name']['first'];
            dispatch(clientSetActive(client));                                      
        } catch (error) {
            console.log(error);
        }
    }
};
export const autoAddNew = (client) =>{    
    return async(dispatch) => {                
        try {            
            dispatch(autoSetActive(client));                                      
        } catch (error) {
            console.log(error);
        }
    }
};
export const clientSetActive = (client) =>({
    type:types.clientSetActive,
    payload:client
});

export const autoSetActive = (client) =>({
    type:types.autoSetActive,
    payload:client
});

export const clientCleanActive = () =>({
    type:types.clientCleanActive    
});

const clientsLoaded = (clients) =>({
    type:types.clientsLoaded,
    payload:clients
});