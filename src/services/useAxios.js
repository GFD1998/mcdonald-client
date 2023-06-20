/*
Name: Josh Tuffnell
Date: 6-20-2023
File: useAxios.js
Description: create a custom hook that use Axios to make HTTP calls and retrieve data from an API server.
 */

import axios from 'axios';
import {useState, useEffect} from 'react';

const UseAxios = (url,
                  method = "GET",
                  headers = {},
                  body = {}) => {
    headers = {
        ...{"Content-Type": "application/json"},
        ...headers
    };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //useEffect function
    useEffect(() => {
        const controller = new AbortController;

        axios({
            url: url,
            method: method,
            headers: headers,
            data: body,
            timeout: 2000
        })
            .then(response => {
                setIsLoading(false);
                setError(null);
                setData(response.data);
            })
            .catch(error => {
                setIsLoading(false);
                if(error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError(error.response)
                } else if (error.request) {
                    // The request was made but no response was received
                    setError(error.request)
                } else {
                    setError("Error: ", error.message)
                }
            });
    }, [url]);

    return {data, isLoading, error};
};

export default UseAxios;