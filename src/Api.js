const BASE_API = 'http://192.168.43.47:3000';

export default {
   
    register: async(data) => {
        const req = await fetch(`${BASE_API}/cadEmpresa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        )
    
        return req;
    },

    login : async(cnpj, password) => {

        const req = await fetch(`${BASE_API}/signinEmpresa`,{
            method: 'Post',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body : JSON.stringify({cnpj, password})
        })

        if(req.ok){
            const json = {
                data: await req.json(),
                status: req.status,
            }
            return json;

        }else{
            const json = req.status
            return json;
        }
    },

    registerService: async(data, token) => {
        const req = await fetch(`${BASE_API}/saveService`,{
            method: 'Post',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({data, token})
        })

        return req.status;

    },

    getServices: async() => {
        const token = localStorage.getItem('token');

        const req = await fetch(`${BASE_API}/getService/${token}`)

        const json = await req.json();
        return json;

    },

    deleteService: async(id, token) => {

        const req = await fetch(`${BASE_API}/deleteService/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({token})
        })
        
        return req.status;
    },

    updateService: async (data, token) =>{
        const req = await fetch(`${BASE_API}/updateService/${data.idService}`, {
            method: 'PUT',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({data})
        })

        return req.status
    },

    requestCode : async (cnpj, email) =>{
        const req = await fetch(`${BASE_API}/requestCode`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({cnpj, email})
        })

        return req
    },

    validateCode: async (code) =>{
        const req = await fetch(`${BASE_API}/validateCode/${code}`)

        return req;

    },

    resetPassword: async (cnpj, password) =>{
        const req = await fetch(`${BASE_API}/resetPassword`,{
            method: 'PUT',
            headers :{
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({cnpj, password})
        })
        
        return req;
    }
    
}