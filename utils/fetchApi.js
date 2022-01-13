import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '039ab8fd0dmsh63e0081db73b45dp1ee307jsnef47a6516380'
            }
        
    });
     return data;
}
