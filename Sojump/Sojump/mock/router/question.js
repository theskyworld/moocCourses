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
        response(ctx) {
            const {url, query} = ctx;
            const isStar = url.includes("isStar=true") ? true : undefined;
            const isDeleted = url.includes("isDeleted=true") ? true : false;

            const {keyword = "", page = 1, perPageSize = 10 } = query;

            return {
                errno: 0,
                data: {
                    // 返回当前页的列表数据
                    // 对于已经删除的问卷，后端返回数据时，用于展示问卷列表中的，过滤掉已经被假删除的问卷
                    list: getRandomQuestionList(perPageSize, isDeleted, isStar).filter(question => !question.isDeleted),
                    total : 100, // 列表数据总数，用于分页
                }
            }
        }
    }, 
    // 更新问卷
    {
        url: "/api/question/:id",
        method: "patch",
        response() {
            return {
                errno : 0,
            }
        }
    },
    // 复制问卷
     {
        url: "/api/question/duplicate/:id",
        method: "post",
        response() {
            return {
                errno: 0,
                data: {
                    id : Random.id(),
                }
            }
        }
    },
]