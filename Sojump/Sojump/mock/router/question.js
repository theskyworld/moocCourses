const Random = require("mockjs").Random;


module.exports = [
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
    {
        url: "/api/question",
        method: "post",
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    msg : "添加成功"
                }
            }
        }
    }
]