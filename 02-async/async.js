import axios from "axios"

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    
    return results.data

}

fetchData(1)
export default fetchData

