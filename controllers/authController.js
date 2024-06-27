
module.exports = (db) => {
    return {
        welcome: (req, res) => {
            res.send('Welcome to the API');
        },
        login: (req, res) => {
            res.send('Login route');
        }
    }
}