// Getting element and adding event
document.getElementById('button').addEventListener('click', loadData);

function loadData () {
    // Creating an XHR Object
    const xhr = new XMLHttpRequest();

    // Using OPEN method
    // open ( type of request, URL, async or not)
    xhr.open('GET', 'data.txt', true);

    console.log('READY STATE', xhr.readyState);

    // Optional - Used for spinners / loaders
    xhr.onprogress = function () {
        console.log('Ready state'. xhr.readyState);
    }


    // Onload is a new feature
    xhr.onload = function () {

        console.log('READY STATE', xhr.readyState);

        if(this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // onreadystatechange is old
    // xhr.onreadystatechange = function () {

    //     console.log('READY STATE', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }       

    // Used to check for errors
    xhr.onerror = function() {
        console.log('Error message');
    }

    // Needs to be called in order to run
    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"
}