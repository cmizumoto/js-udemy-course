// Init GitHub
const github = new Github;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // make HTTP call
        gitHub.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show alert

            } else {
                // Show profile

            }
        })
    } else {
        //  Clear profile
    }

});