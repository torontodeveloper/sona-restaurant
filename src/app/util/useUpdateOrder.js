import axios from "axios"

const payload = {
    'name':'Biryani',
    'categories':'Non-Veg',
    "ingredients":[],
    "region":"North  Indian",
    "url":'url'
}
function useUpdateOrder(){
     axios.post('http://localhost:8000/dishes',payload).then(
        resp=>console.log('response',resp)
     ).catch(exception=>console.log('Exception occured',exception))
}