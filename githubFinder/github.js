class Github {
    constructor() {
        this.client_id = '31016b4ee2d3d934bf76',
        this.client_secret ='e72251fd4531c081b50a1afe15f92cca71c676c9'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}