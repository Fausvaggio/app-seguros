const baseUrl="https://randomuser.me/api";
export const fetchCustom = (endpoint,data,method='GET') =>{
    const url = `${baseUrl}/${endpoint}`;    
    if(method === 'GET'){
        return fetch(url);
    }
    else{
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}