const user = require('./user.js');
const question = require("./question.js");
const stat = require('./stat.js');

const mockList = [
    ...user,
    ...question,
    ...stat,
]

module.exports = mockList;