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
                    title: Random.title(),
                    // 当前问卷中所包含的组件列表属性
                    components: [
                    // QuestionTitle组件
                        {
                            id: Random.id(),
                            type: "questionTitle", // 前后端公用的统一组件类型值
                            titl: "标题",
                            props: { // 对应前端QuestionTitle组件属性
                                text: '个人信息调研',
                                level: 1,
                                isCenter: false
                            }
                        },
                        // QuestionInput组件
                        {
                            id: Random.id(),
                            type: "questionInput",
                            title: "输入框",
                            props: { // 对应前端QuestionInput组件属性
                                title: "你的姓名",
                                placeholder : "请输入姓名..."
                            }
                        },
                        // QuestionInput组件
                        {
                            id: Random.id(),
                            type: "questionInput",
                            title: "输入框",
                            props: { // 对应前端QuestionInput组件属性
                                title: "你的电话号码",
                                placeholder : "请输入电话号码..."
                            }
                        }
                    ],
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
                    list: getRandomQuestionList(perPageSize, isDeleted, isStar),
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
    // 批量彻底删除
    {
        url: "/api/question",
        method: "delete",
        response() {
            return {
                errno : 0,
            }
        }
     }
]