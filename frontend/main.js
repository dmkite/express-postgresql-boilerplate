
const [path, query] = window.location.pathname.split('?')
const {projectName, dbName} = require('../details/project-details')
const login = require('./src/login')
const signup = require('./src/signup')

const pageInitializer = {
    '/': login.init,
    '/index.html': login.init,
    '/signup.html': signup.init
}

document.querySelector('title').innerHTML = projectName
pageInitializer[path]()