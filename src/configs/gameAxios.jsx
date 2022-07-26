import axios from 'axios';

const  gameAxios = axios.create({
     baseUrl : 'http://localhost:8000/games',
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
console.log('http://localhost:8000/games')
export default gameAxios;