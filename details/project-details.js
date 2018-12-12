const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'project-details.txt')

const projectDetails = fs.readFileSync(file, 'utf-8')
const projectArr = projectDetails.split('\n')
const projectName = projectArr[0]
const dbName = projectArr[1]

module.exports = {projectName, dbName}