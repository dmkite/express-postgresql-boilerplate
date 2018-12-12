
const [path, query] = window.location.pathname.split('?')
const login = require('./src/login')
const signup = require('./src/signup')
const protectedPage = require('./src/protected-page')

const pageInitializer = {
    '/': login.init,
    '/index.html': login.init,
    '/signup.html': signup.init,
    '/protected-page.html': protectedPage.init
}

pageInitializer[path]()