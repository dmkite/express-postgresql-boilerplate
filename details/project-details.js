const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'project-details.txt')

const projectDetails = fs.readFileSync(file, 'utf-8')
console.log(typeof(projectDetails))
const projectArr = projectDetails.split('\n')
const projectName = projectArr[0]
const dbName = projectArr[1]

console.log(projectName, dbName)

module.exports = {projectName, dbName}