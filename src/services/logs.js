import DATA from '../data.json';


export async function getLogs(){
    const response = await fetch(DATA.API_URL+'/api/logs',{
        method:'GET'
    })
    return response.json()
}


