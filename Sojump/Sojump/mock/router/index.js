const userinfo = require('./userInfo.js');
const question = require("./question.js");

const mockList = [
    ...userinfo,
    ...question,
]

module.exports = mockList;