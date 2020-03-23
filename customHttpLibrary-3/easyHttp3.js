/* 
EasyHTTP Library
Library for making HTTP request

@version 3.0.0
@author Caio Mizumoto
@license MIT
*/

class EasyHTTP{
    // Make an HTTP GET request
    async get(url){
        const response = await fetch(url);

        const resData = await response.json();

        return resData;
    }

    // Make Http POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }

    // Make Http PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }

    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await 'Resourse Deleted';

        return resData;
    }
}

