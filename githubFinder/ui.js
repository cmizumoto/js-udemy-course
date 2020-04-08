class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile (user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" targe="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-3">
                        <span ckass="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span ckass="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span ckass="badge badge-success">Public Followers: ${user.followers}</span>
                        <span ckass="badge badge-info">Public Following: ${user.following}</span>

                        <br>
                        <br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // SHow user repos
    showRepos(repos){
        let output = '';

        repos.forEach( function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span ckass="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span ckass="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span ckass="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        })

        // output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show Alert Message
    showAlert(message, className) {
        // Clear existing alerts
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        // add Classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // get Search box
        const search = document.querySelector('.search');
        // Insert the alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}