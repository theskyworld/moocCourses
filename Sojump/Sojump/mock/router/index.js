const user = require('./user.js');
const question = require("./question.js");

const mockList = [
    ...user,
    ...question,
]

module.exports = mockList;