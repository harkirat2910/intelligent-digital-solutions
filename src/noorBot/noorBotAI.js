import axios from "axios";

    const FetchResponse = async(query) =>{
        let response = '';
        if(query ==  null || query.trim() == '')
            response = 'Please provide a query to proceed';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        await axios.post(`http://15.223.77.49:5000/query`, {'query': query}, axiosConfig)
            .then(res => {
                response = res.data.answer;
            })
            .catch(error =>{
                response = `Something went wrong : ${error} [ERROR CODE - BQ]`
            })
        return response;
    }

export {FetchResponse};