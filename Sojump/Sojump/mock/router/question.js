const Random = require("mockjs").Random;
const getRandomQuestionList = require('./data/questionList');

module.exports = [
    // 获取单个问卷
    {
        url: "/api/question/:id",
        method: "get",
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title : Random.title(),
                }
            }
        }
    },

    // 创建问卷
    {
        url: "/api/question",
        method: "post",
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    // 获取(查询)问卷列表
    {
        url: "/api/question-list",
        method: "get",
        response() {
            return {
                errno: 0,
                data: {
                    // 返回当前页的列表数据
                    list: getRandomQuestionList(),
                    total : 100, // 列表数据总数，用于分页
                }
            }
        }
    }
]