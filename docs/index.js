const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./tasks');
const taks = require('./tasks')

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
}